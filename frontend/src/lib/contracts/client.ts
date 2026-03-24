import { 
  rpc, 
  Transaction,
} from "@stellar/stellar-sdk";
import { 
  signTransaction 
} from "@stellar/freighter-api";

export const SOROBAN_RPC_URL = import.meta.env.VITE_SOROBAN_RPC_URL || "https://soroban-testnet.stellar.org";
export const NETWORK_PASSPHRASE = import.meta.env.VITE_SOROBAN_NETWORK_PASSPHRASE || "Test SDF Network ; September 2015";

export const server = new rpc.Server(SOROBAN_RPC_URL);

export interface TransactionResult {
  status: "SUCCESS" | "FAILED" | "PENDING";
  txHash: string;
  resultXdr?: string;
  error?: string;
}

/**
 * Common helper to wait for transaction completion
 */
export async function pollTransaction(txHash: string): Promise<any> {
  let response = await server.getTransaction(txHash);
  
  while (response.status === "NOT_FOUND") {
    await new Promise(resolve => setTimeout(resolve, 1000));
    response = await server.getTransaction(txHash);
  }
  
  return response;
}

/**
 * Signs and submits a transaction using Freighter
 */
export async function signAndSubmit(tx: Transaction): Promise<TransactionResult> {
  try {
    const result: any = await signTransaction(tx.toXDR(), {
      networkPassphrase: NETWORK_PASSPHRASE,
    });
    
    if (result && result.signedTxXdr) {
      const { signedTxXdr } = result;
      // Use Transaction constructor with bypass to avoid SDK 14 strict type issues
      const submitResponse = await server.sendTransaction(new Transaction(signedTxXdr as any, NETWORK_PASSPHRASE));
      
      if (submitResponse.status === "PENDING" || (submitResponse as any).status === "SUCCESS") {
        const pollResponse = await pollTransaction(submitResponse.hash);
        
        if (pollResponse.status === "SUCCESS") {
          return {
            status: "SUCCESS",
            txHash: submitResponse.hash,
            resultXdr: (pollResponse as any).resultXdr,
          };
        } else {
          return {
            status: "FAILED",
            txHash: submitResponse.hash,
            error: "Transaction failed after submission",
          };
        }
      } else {
        return {
          status: "FAILED",
          txHash: submitResponse.hash,
          error: "Submission failed",
        };
      }
    } else {
       return {
         status: "FAILED",
         txHash: "",
         error: "Signing failed"
       };
    }
  } catch (err: any) {
    console.error("Transaction submission error:", err);
    return {
      status: "FAILED",
      txHash: "",
      error: err.message || "Unknown error during signing/submission",
    };
  }
}

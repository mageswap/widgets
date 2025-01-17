import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PoolAddressTest, PoolAddressTestInterface } from "../PoolAddressTest";
export declare class PoolAddressTest__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<PoolAddressTest>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): PoolAddressTest;
    connect(signer: Signer): PoolAddressTest__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b50610356806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80638716c5ff14610046578063cce34ec6146100be578063dc6fd8ab1461011f575b600080fd5b6100956004803603608081101561005c57600080fd5b50803573ffffffffffffffffffffffffffffffffffffffff908116916020810135821691604082013516906060013562ffffff16610127565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b61010d600480360360808110156100d457600080fd5b50803573ffffffffffffffffffffffffffffffffffffffff908116916020810135821691604082013516906060013562ffffff16610187565b60408051918252519081900360200190f35b61010d6101ef565b600061017e8560405180606001604052808773ffffffffffffffffffffffffffffffffffffffff1681526020018673ffffffffffffffffffffffffffffffffffffffff1681526020018562ffffff16815250610213565b95945050505050565b6000805a90506101e28660405180606001604052808873ffffffffffffffffffffffffffffffffffffffff1681526020018773ffffffffffffffffffffffffffffffffffffffff1681526020018662ffffff16815250610213565b505a900395945050505050565b7fe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b5490565b6000816020015173ffffffffffffffffffffffffffffffffffffffff16826000015173ffffffffffffffffffffffffffffffffffffffff161061025557600080fd5b508051602080830151604093840151845173ffffffffffffffffffffffffffffffffffffffff94851681850152939091168385015262ffffff166060808401919091528351808403820181526080840185528051908301207fff0000000000000000000000000000000000000000000000000000000000000060a085015294901b7fffffffffffffffffffffffffffffffffffffffff0000000000000000000000001660a183015260b58201939093527fe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b5460d5808301919091528251808303909101815260f590910190915280519101209056fea164736f6c6343000706000a";
    static readonly abi: {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): PoolAddressTestInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): PoolAddressTest;
}

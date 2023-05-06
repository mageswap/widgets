import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { OracleTest, OracleTestInterface } from "../OracleTest";
export declare class OracleTest__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<OracleTest>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): OracleTest;
    connect(signer: Signer): OracleTest__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b50611839806100206000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c8063824134891161005b57806382413489146100fd578063ab34b0fc14610110578063bbe8f41914610130578063e6c4fbe01461014357610088565b8063333b19a81461008d57806343c57a27146100b75780636a816ff9146100d75780637059b38a146100ea575b600080fd5b6100a061009b366004611558565b610164565b6040516100ae9291906117a5565b60405180910390f35b6100ca6100c5366004611744565b61017a565b6040516100ae91906117ca565b6100ca6100e5366004611744565b610191565b6100ca6100f83660046115b0565b6101b0565b6100a061010b366004611572565b6101c3565b61012361011e36600461166e565b6101db565b6040516100ae9190611797565b6100ca61013e366004611572565b6101ee565b610156610151366004611558565b61020a565b6040516100ae9291906117d3565b6000806101708361021f565b915091505b915091565b60006101888585858561060e565b95945050505050565b6000805a90506101a38686868661060e565b505a900395945050505050565b60006101bc83836107b7565b9392505050565b6000806101d084846108e7565b915091509250929050565b60006101e682610d18565b90505b919050565b6000805a90506101fe84846108e7565b50505a90039392505050565b60008061021683610e04565b93429350915050565b60008060008060008573ffffffffffffffffffffffffffffffffffffffff16633850c7bd6040518163ffffffff1660e01b815260040160e06040518083038186803b15801561026d57600080fd5b505afa158015610281573d6000803e3d6000fd5b505050506040513d60e081101561029757600080fd5b50602081015160408201516060909201519094509092509050600161ffff82161161032357604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600360248201527f4e454f0000000000000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b60008060008873ffffffffffffffffffffffffffffffffffffffff1663252c09d7866040518263ffffffff1660e01b8152600401808261ffff16815260200191505060806040518083038186803b15801561037d57600080fd5b505afa158015610391573d6000803e3d6000fd5b505050506040513d60808110156103a757600080fd5b508051602082015160409092015190945090925090504263ffffffff9081169084161461045257858973ffffffffffffffffffffffffffffffffffffffff16631a6865026040518163ffffffff1660e01b815260040160206040518083038186803b15801561041557600080fd5b505afa158015610429573d6000803e3d6000fd5b505050506040513d602081101561043f57600080fd5b5051909850965061017595505050505050565b60008461ffff1660018661ffff168861ffff1601038161046e57fe5b0690506000806000808d73ffffffffffffffffffffffffffffffffffffffff1663252c09d7866040518263ffffffff1660e01b81526004018082815260200191505060806040518083038186803b1580156104c857600080fd5b505afa1580156104dc573d6000803e3d6000fd5b505050506040513d60808110156104f257600080fd5b50805160208201516040830151606090930151919650945090925090508061057b57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600360248201527f4f4e490000000000000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b83880363ffffffff811684890360060b8161059257fe5b059b50600077ffffffffffffffffffffffffffffffffffffffff0000000084890360201b1663ffffffff831673ffffffffffffffffffffffffffffffffffffffff0277ffffffffffffffffffffffffffffffffffffffffffffffff16816105f557fe5b9d9f50909c049c50505050505050505050505050915091565b60008061061a8661102f565b90506fffffffffffffffffffffffffffffffff73ffffffffffffffffffffffffffffffffffffffff8216116106e85773ffffffffffffffffffffffffffffffffffffffff808216800290848116908616106106aa576106a57801000000000000000000000000000000000000000000000000876fffffffffffffffffffffffffffffffff16836113c2565b6106e0565b6106e081876fffffffffffffffffffffffffffffffff1678010000000000000000000000000000000000000000000000006113c2565b9250506107ae565b600061071473ffffffffffffffffffffffffffffffffffffffff831680680100000000000000006113c2565b90508373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff161061077c57610777700100000000000000000000000000000000876fffffffffffffffffffffffffffffffff16836113c2565b6107aa565b6107aa81876fffffffffffffffffffffffffffffffff167001000000000000000000000000000000006113c2565b9250505b50949350505050565b6000815160018451031461082c57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600260248201527f444c000000000000000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b60015b825181116108e05783818151811061084357fe5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1684600183038151811061087057fe5b602002602001015173ffffffffffffffffffffffffffffffffffffffff16106108b7578260018203815181106108a257fe5b602002602001015160020b82039150816108d7565b8260018203815181106108c657fe5b602002602001015160020b82019150815b5060010161082f565b5092915050565b60008063ffffffff831661095c57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600260248201527f4250000000000000000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b604080516002808252606082018352600092602083019080368337019050509050838160008151811061098b57fe5b602002602001019063ffffffff16908163ffffffff16815250506000816001815181106109b457fe5b63ffffffff9092166020928302919091018201526040517f883bdbfd00000000000000000000000000000000000000000000000000000000815260048101828152835160248301528351600093849373ffffffffffffffffffffffffffffffffffffffff8b169363883bdbfd9388939192839260449091019185820191028083838b5b83811015610a4f578181015183820152602001610a37565b505050509050019250505060006040518083038186803b158015610a7257600080fd5b505afa158015610a86573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040908152811015610acd57600080fd5b8101908080516040519392919084640100000000821115610aed57600080fd5b908301906020820185811115610b0257600080fd5b8251866020820283011164010000000082111715610b1f57600080fd5b82525081516020918201928201910280838360005b83811015610b4c578181015183820152602001610b34565b5050505090500160405260200180516040519392919084640100000000821115610b7557600080fd5b908301906020820185811115610b8a57600080fd5b8251866020820283011164010000000082111715610ba757600080fd5b82525081516020918201928201910280838360005b83811015610bd4578181015183820152602001610bbc565b5050505090500160405250505091509150600082600081518110610bf457fe5b602002602001015183600181518110610c0957fe5b6020026020010151039050600082600081518110610c2357fe5b602002602001015183600181518110610c3857fe5b60200260200101510390508763ffffffff168260060b81610c5557fe5b05965060008260060b128015610c7f57508763ffffffff168260060b81610c7857fe5b0760060b15155b15610caa577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff909601955b63ffffffff881673ffffffffffffffffffffffffffffffffffffffff0277ffffffffffffffffffffffffffffffffffffffff00000000602083901b1677ffffffffffffffffffffffffffffffffffffffffffffffff821681610d0857fe5b0496505050505050509250929050565b6000806000805b8451811015610dad57848181518110610d3457fe5b6020026020010151602001516fffffffffffffffffffffffffffffffff16858281518110610d5e57fe5b60200260200101516000015160020b0283019250848181518110610d7e57fe5b6020026020010151602001516fffffffffffffffffffffffffffffffff16820191508080600101915050610d1f565b50808281610db757fe5b059250600082128015610dd25750808281610dce57fe5b0715155b15610dfd577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff909201915b5050919050565b60008060008373ffffffffffffffffffffffffffffffffffffffff16633850c7bd6040518163ffffffff1660e01b815260040160e06040518083038186803b158015610e4f57600080fd5b505afa158015610e63573d6000803e3d6000fd5b505050506040513d60e0811015610e7957600080fd5b506040810151606090910151909250905061ffff8116610efa57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600260248201527f4e49000000000000000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b6000808573ffffffffffffffffffffffffffffffffffffffff1663252c09d78461ffff168660010161ffff1681610f2d57fe5b066040518263ffffffff1660e01b8152600401808261ffff16815260200191505060806040518083038186803b158015610f6657600080fd5b505afa158015610f7a573d6000803e3d6000fd5b505050506040513d6080811015610f9057600080fd5b508051606090910151909250905080611024578573ffffffffffffffffffffffffffffffffffffffff1663252c09d760006040518263ffffffff1660e01b81526004018082815260200191505060806040518083038186803b158015610ff557600080fd5b505afa158015611009573d6000803e3d6000fd5b505050506040513d608081101561101f57600080fd5b505191505b504203949350505050565b60008060008360020b12611046578260020b61104e565b8260020b6000035b9050620d89e88111156110c257604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600160248201527f5400000000000000000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b6000600182166110e3577001000000000000000000000000000000006110f5565b6ffffcb933bd6fad37aa2d162d1a5940015b70ffffffffffffffffffffffffffffffffff1690506002821615611129576ffff97272373d413259a46990580e213a0260801c5b6004821615611148576ffff2e50f5f656932ef12357cf3c7fdcc0260801c5b6008821615611167576fffe5caca7e10e4e61c3624eaa0941cd00260801c5b6010821615611186576fffcb9843d60f6159c9db58835c9266440260801c5b60208216156111a5576fff973b41fa98c081472e6896dfb254c00260801c5b60408216156111c4576fff2ea16466c96a3843ec78b326b528610260801c5b60808216156111e3576ffe5dee046a99a2a811c461f1969c30530260801c5b610100821615611203576ffcbe86c7900a88aedcffc83b479aa3a40260801c5b610200821615611223576ff987a7253ac413176f2b074cf7815e540260801c5b610400821615611243576ff3392b0822b70005940c7a398e4b70f30260801c5b610800821615611263576fe7159475a2c29b7443b29c7fa6e889d90260801c5b611000821615611283576fd097f3bdfd2022b8845ad8f792aa58250260801c5b6120008216156112a3576fa9f746462d870fdf8a65dc1f90e061e50260801c5b6140008216156112c3576f70d869a156d2a1b890bb3df62baf32f70260801c5b6180008216156112e3576f31be135f97d08fd981231505542fcfa60260801c5b62010000821615611304576f09aa508b5b7a84e1c677de54f3e99bc90260801c5b62020000821615611324576e5d6af8dedb81196699c329225ee6040260801c5b62040000821615611343576d2216e584f5fa1ea926041bedfe980260801c5b62080000821615611360576b048a170391f7dc42444e8fa20260801c5b60008460020b131561139957807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8161139557fe5b0490505b6401000000008106156113ad5760016113b0565b60005b60ff16602082901c0192505050919050565b600080807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff85870986860292508281109083900303905080611416576000841161140b57600080fd5b5082900490506101bc565b80841161142257600080fd5b6000848688096000868103871696879004966002600389028118808a02820302808a02820302808a02820302808a02820302808a02820302808a02909103029181900381900460010186841190950394909402919094039290920491909117919091029150509392505050565b803573ffffffffffffffffffffffffffffffffffffffff811681146101e957600080fd5b600082601f8301126114c3578081fd5b813560206114d86114d38361180e565b6117ea565b82815281810190858301838502870184018810156114f4578586fd5b855b858110156115195761150782611526565b845292840192908401906001016114f6565b5090979650505050505050565b8035600281900b81146101e957600080fd5b80356fffffffffffffffffffffffffffffffff811681146101e957600080fd5b600060208284031215611569578081fd5b6101bc8261148f565b60008060408385031215611584578081fd5b61158d8361148f565b9150602083013563ffffffff811681146115a5578182fd5b809150509250929050565b600080604083850312156115c2578182fd5b823567ffffffffffffffff808211156115d9578384fd5b818501915085601f8301126115ec578384fd5b813560206115fc6114d38361180e565b82815281810190858301838502870184018b1015611618578889fd5b8896505b848710156116415761162d8161148f565b83526001969096019591830191830161161c565b5096505086013592505080821115611657578283fd5b50611664858286016114b3565b9150509250929050565b60006020808385031215611680578182fd5b823567ffffffffffffffff80821115611697578384fd5b818501915085601f8301126116aa578384fd5b81356116b86114d38261180e565b818152848101908486016040808502870188018b10156116d6578889fd5b8896505b848710156117355780828c0312156116f0578889fd5b8051818101818110888211171561170357fe5b825261170e83611526565b815261171b898401611538565b818a015284526001969096019592870192908101906116da565b50909998505050505050505050565b60008060008060808587031215611759578182fd5b61176285611526565b935061177060208601611538565b925061177e6040860161148f565b915061178c6060860161148f565b905092959194509250565b60029190910b815260200190565b60029290920b82526fffffffffffffffffffffffffffffffff16602082015260400190565b90815260200190565b63ffffffff92831681529116602082015260400190565b60405181810167ffffffffffffffff8111828210171561180657fe5b604052919050565b600067ffffffffffffffff82111561182257fe5b506020908102019056fea164736f6c6343000706000a";
    static readonly abi: ({
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
    } | {
        inputs: {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
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
    })[];
    static createInterface(): OracleTestInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): OracleTest;
}

import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MixedRouteQuoterV1, MixedRouteQuoterV1Interface } from "../MixedRouteQuoterV1";
export declare class MixedRouteQuoterV1__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(_factory: string, _factoryV2: string, _WETH9: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<MixedRouteQuoterV1>;
    getDeployTransaction(_factory: string, _factoryV2: string, _WETH9: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): MixedRouteQuoterV1;
    connect(signer: Signer): MixedRouteQuoterV1__factory;
    static readonly bytecode = "0x60e06040523480156200001157600080fd5b506040516200225438038062002254833981016040819052620000349162000078565b6001600160601b0319606093841b811660805290831b811660a052911b1660c052620000c1565b80516001600160a01b03811681146200007357600080fd5b919050565b6000806000606084860312156200008d578283fd5b62000098846200005b565b9250620000a8602085016200005b565b9150620000b8604085016200005b565b90509250925092565b60805160601c60a05160601c60c05160601c61214e620001066000398061015152806107b052508061012d52508061036d528061061252806107f6525061214e6000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c8063b174a0a71161005b578063b174a0a7146100c8578063c45a0155146100eb578063cdca1753146100f3578063fa461e33146101165761007d565b80634aa4a4fc1461008257806368e0d4e1146100a05780638a499286146100a8575b600080fd5b61008a61012b565b6040516100979190611ea7565b60405180910390f35b61008a61014f565b6100bb6100b6366004611c32565b610173565b6040516100979190611fa0565b6100db6100d6366004611c96565b610192565b6040516100979493929190612051565b61008a61036b565b610106610101366004611b14565b61038f565b6040516100979493929190611fa9565b610129610124366004611b7a565b6105e1565b005b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b600061018c8260400151836000015184602001516107a6565b92915050565b60208101518151606083015160009283928392839273ffffffffffffffffffffffffffffffffffffffff808216908416109284926101d092906107ef565b905060005a90508173ffffffffffffffffffffffffffffffffffffffff1663128acb0830856102028c6040015161082d565b60808d015173ffffffffffffffffffffffffffffffffffffffff161561022c578c60800151610252565b8761024b5773fffd8963efd1fc6a506488495d951d5263988d25610252565b6401000276a45b8d600001518e606001518f6020015160405160200161027393929190611e41565b6040516020818303038152906040526040518663ffffffff1660e01b81526004016102a2959493929190611ec8565b6040805180830381600087803b1580156102bb57600080fd5b505af1925050508015610309575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820190925261030691810190611b57565b60015b61035e573d808015610337576040519150601f19603f3d011682016040523d82523d6000602084013e61033c565b606091505b505a8203945061034d81848761085f565b975097509750975050505050610364565b50505050505b9193509193565b7f000000000000000000000000000000000000000000000000000000000000000081565b6000606080600061039f86610933565b67ffffffffffffffff811180156103b557600080fd5b506040519080825280602002602001820160405280156103df578160200160208202803683370190505b5092506103eb86610933565b67ffffffffffffffff8111801561040157600080fd5b5060405190808252806020026020018201604052801561042b578160200160208202803683370190505b50915060005b600080600061043f8a610962565b91945092509050628000008116156104a7576104a060405180606001604052808573ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff1681526020018b815250610173565b98506105a0565b6000806000806105246040518060a001604052808973ffffffffffffffffffffffffffffffffffffffff1681526020018873ffffffffffffffffffffffffffffffffffffffff1681526020018f81526020018762ffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff16815250610192565b9350935093509350828b898151811061053957fe5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff1681525050818a898151811061058057fe5b63ffffffff90921660209283029190910190910152929b50505094909401935b6001909301926105af8a610993565b156105c4576105bd8a61099b565b99506105d0565b889750505050506105d8565b505050610431565b92959194509250565b60008313806105f05750600082135b6105f957600080fd5b600080600061060784610962565b9250925092506106397f00000000000000000000000000000000000000000000000000000000000000008484846109d0565b506000806000881361067d578473ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1610886000036106b1565b8373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1610876000035b9150915060006106c28686866107ef565b90506000808273ffffffffffffffffffffffffffffffffffffffff16633850c7bd6040518163ffffffff1660e01b815260040160e06040518083038186803b15801561070d57600080fd5b505afa158015610721573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107459190611d23565b505050505091509150841561076b57604051848152826020820152816040820152606081fd5b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161079d90611f6b565b60405180910390fd5b60008060006107d67f000000000000000000000000000000000000000000000000000000000000000086866109ef565b915091506107e5868383610ad7565b9695505050505050565b60006108257f0000000000000000000000000000000000000000000000000000000000000000610820868686610bad565b610c2a565b949350505050565b60007f8000000000000000000000000000000000000000000000000000000000000000821061085b57600080fd5b5090565b6000806000806000808773ffffffffffffffffffffffffffffffffffffffff16633850c7bd6040518163ffffffff1660e01b815260040160e06040518083038186803b1580156108ae57600080fd5b505afa1580156108c2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108e69190611d23565b509396506108fb94508d9350610d6092505050565b9197509550905061092373ffffffffffffffffffffffffffffffffffffffff89168383610e18565b9350869250505093509350935093565b805160177fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffec909101045b919050565b600080806109708482611470565b925061097d846014611570565b905061098a846017611470565b91509193909250565b516042111590565b805160609061018c9083906017907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe901611660565b60006109e6856109e1868686610bad565b611847565b95945050505050565b60008060006109fe8585611877565b509050600080610a0f88888861191c565b73ffffffffffffffffffffffffffffffffffffffff16630902f1ac6040518163ffffffff1660e01b815260040160606040518083038186803b158015610a5457600080fd5b505afa158015610a68573d6000803e3d6000fd5b505050506040513d6060811015610a7e57600080fd5b5080516020909101516dffffffffffffffffffffffffffff918216935016905073ffffffffffffffffffffffffffffffffffffffff87811690841614610ac5578082610ac8565b81815b90999098509650505050505050565b6000808411610b4757604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f494e53554646494349454e545f494e5055545f414d4f554e5400000000000000604482015290519081900360640190fd5b600083118015610b575750600082115b610b6057600080fd5b6000610b6e856103e5611a07565b90506000610b7c8285611a07565b90506000610b9683610b90886103e8611a07565b90611a2b565b9050808281610ba157fe5b04979650505050505050565b610bb5611a74565b8273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161115610bed579192915b506040805160608101825273ffffffffffffffffffffffffffffffffffffffff948516815292909316602083015262ffffff169181019190915290565b6000816020015173ffffffffffffffffffffffffffffffffffffffff16826000015173ffffffffffffffffffffffffffffffffffffffff1610610c6c57600080fd5b508051602080830151604093840151845173ffffffffffffffffffffffffffffffffffffffff94851681850152939091168385015262ffffff166060808401919091528351808403820181526080840185528051908301207fff0000000000000000000000000000000000000000000000000000000000000060a085015294901b7fffffffffffffffffffffffffffffffffffffffff0000000000000000000000001660a183015260b58201939093527fe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b5460d5808301919091528251808303909101815260f5909101909152805191012090565b60008060008351606014610df757604484511015610daa576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161079d90611f34565b60048401935083806020019051810190610dc49190611bc8565b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161079d9190611f1a565b83806020019051810190610e0b9190611dba565b9250925092509193909250565b60008060008060008060008060088b73ffffffffffffffffffffffffffffffffffffffff1663d0c93a7c6040518163ffffffff1660e01b815260040160206040518083038186803b158015610e6c57600080fd5b505afa158015610e80573d6000803e3d6000fd5b505050506040513d6020811015610e9657600080fd5b5051600290810b908c900b81610ea857fe5b0560020b901d905060006101008c73ffffffffffffffffffffffffffffffffffffffff1663d0c93a7c6040518163ffffffff1660e01b815260040160206040518083038186803b158015610efb57600080fd5b505afa158015610f0f573d6000803e3d6000fd5b505050506040513d6020811015610f2557600080fd5b5051600290810b908d900b81610f3757fe5b0560020b81610f4257fe5b079050600060088d73ffffffffffffffffffffffffffffffffffffffff1663d0c93a7c6040518163ffffffff1660e01b815260040160206040518083038186803b158015610f8f57600080fd5b505afa158015610fa3573d6000803e3d6000fd5b505050506040513d6020811015610fb957600080fd5b5051600290810b908d900b81610fcb57fe5b0560020b901d905060006101008e73ffffffffffffffffffffffffffffffffffffffff1663d0c93a7c6040518163ffffffff1660e01b815260040160206040518083038186803b15801561101e57600080fd5b505afa158015611032573d6000803e3d6000fd5b505050506040513d602081101561104857600080fd5b5051600290810b908e900b8161105a57fe5b0560020b8161106557fe5b07905060008160ff166001901b8f73ffffffffffffffffffffffffffffffffffffffff16635339c296856040518263ffffffff1660e01b8152600401808260010b815260200191505060206040518083038186803b1580156110c657600080fd5b505afa1580156110da573d6000803e3d6000fd5b505050506040513d60208110156110f057600080fd5b50511611801561118357508d73ffffffffffffffffffffffffffffffffffffffff1663d0c93a7c6040518163ffffffff1660e01b815260040160206040518083038186803b15801561114157600080fd5b505afa158015611155573d6000803e3d6000fd5b505050506040513d602081101561116b57600080fd5b5051600290810b908d900b8161117d57fe5b0760020b155b801561119457508b60020b8d60020b135b945060008360ff166001901b8f73ffffffffffffffffffffffffffffffffffffffff16635339c296876040518263ffffffff1660e01b8152600401808260010b815260200191505060206040518083038186803b1580156111f457600080fd5b505afa158015611208573d6000803e3d6000fd5b505050506040513d602081101561121e57600080fd5b5051161180156112b157508d73ffffffffffffffffffffffffffffffffffffffff1663d0c93a7c6040518163ffffffff1660e01b815260040160206040518083038186803b15801561126f57600080fd5b505afa158015611283573d6000803e3d6000fd5b505050506040513d602081101561129957600080fd5b5051600290810b908e900b816112ab57fe5b0760020b155b80156112c257508b60020b8d60020b125b95508160010b8460010b12806112ee57508160010b8460010b1480156112ee57508060ff168360ff1611155b1561130457839950829750819850809650611311565b8199508097508398508296505b50507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60ff87161b9150505b8560010b8760010b13611448578560010b8760010b1415611382577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60ff858103161c165b6000818c73ffffffffffffffffffffffffffffffffffffffff16635339c2968a6040518263ffffffff1660e01b8152600401808260010b815260200191505060206040518083038186803b1580156113d957600080fd5b505afa1580156113ed573d6000803e3d6000fd5b505050506040513d602081101561140357600080fd5b505116905061141181611a3b565b61ffff16989098019750506001909501947fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff61133d565b8115611455576001880397505b8215611462576001880397505b505050505050509392505050565b6000818260140110156114e457604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f746f416464726573735f6f766572666c6f770000000000000000000000000000604482015290519081900360640190fd5b816014018351101561155757604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f746f416464726573735f6f75744f66426f756e64730000000000000000000000604482015290519081900360640190fd5b5001602001516c01000000000000000000000000900490565b6000818260030110156115e457604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f746f55696e7432345f6f766572666c6f77000000000000000000000000000000604482015290519081900360640190fd5b816003018351101561165757604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f746f55696e7432345f6f75744f66426f756e6473000000000000000000000000604482015290519081900360640190fd5b50016003015190565b60608182601f0110156116d457604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f736c6963655f6f766572666c6f77000000000000000000000000000000000000604482015290519081900360640190fd5b82828401101561174557604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f736c6963655f6f766572666c6f77000000000000000000000000000000000000604482015290519081900360640190fd5b818301845110156117b757604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f736c6963655f6f75744f66426f756e6473000000000000000000000000000000604482015290519081900360640190fd5b6060821580156117d6576040519150600082526020820160405261183e565b6040519150601f8416801560200281840101858101878315602002848b0101015b8183101561180f5780518352602092830192016117f7565b5050858452601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016604052505b50949350505050565b60006118538383610c2a565b90503373ffffffffffffffffffffffffffffffffffffffff82161461018c57600080fd5b6000808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614156118b357600080fd5b8273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16106118ed5782846118f0565b83835b909250905073ffffffffffffffffffffffffffffffffffffffff821661191557600080fd5b9250929050565b600080600061192b8585611877565b604080517fffffffffffffffffffffffffffffffffffffffff000000000000000000000000606094851b811660208084019190915293851b81166034830152825160288184030181526048830184528051908501207fff0000000000000000000000000000000000000000000000000000000000000060688401529a90941b9093166069840152607d8301989098527f96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f609d808401919091528851808403909101815260bd909201909752805196019590952095945050505050565b6000821580611a2257505081810281838281611a1f57fe5b04145b61018c57600080fd5b8082018281101561018c57600080fd5b6000805b821561018c577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff830190921691600101611a3f565b604080516060810182526000808252602082018190529181019190915290565b600082601f830112611aa4578081fd5b8135611ab7611ab2826120ac565b612088565b818152846020838601011115611acb578283fd5b816020850160208301379081016020019190915292915050565b8051600281900b811461095d57600080fd5b803561095d8161211c565b805161ffff8116811461095d57600080fd5b60008060408385031215611b26578182fd5b823567ffffffffffffffff811115611b3c578283fd5b611b4885828601611a94565b95602094909401359450505050565b60008060408385031215611b69578182fd5b505080516020909101519092909150565b600080600060608486031215611b8e578081fd5b8335925060208401359150604084013567ffffffffffffffff811115611bb2578182fd5b611bbe86828701611a94565b9150509250925092565b600060208284031215611bd9578081fd5b815167ffffffffffffffff811115611bef578182fd5b8201601f81018413611bff578182fd5b8051611c0d611ab2826120ac565b818152856020838501011115611c21578384fd5b6109e68260208301602086016120ec565b600060608284031215611c43578081fd5b6040516060810181811067ffffffffffffffff82111715611c6057fe5b6040528235611c6e8161211c565b81526020830135611c7e8161211c565b60208201526040928301359281019290925250919050565b600060a08284031215611ca7578081fd5b60405160a0810181811067ffffffffffffffff82111715611cc457fe5b6040528235611cd28161211c565b81526020830135611ce28161211c565b602082015260408381013590820152606083013562ffffff81168114611d06578283fd5b6060820152611d1760808401611af7565b60808201529392505050565b600080600080600080600060e0888a031215611d3d578283fd5b8751611d488161211c565b9650611d5660208901611ae5565b9550611d6460408901611b02565b9450611d7260608901611b02565b9350611d8060808901611b02565b925060a088015160ff81168114611d95578283fd5b60c08901519092508015158114611daa578182fd5b8091505092959891949750929550565b600080600060608486031215611dce578081fd5b835192506020840151611de08161211c565b9150611dee60408501611ae5565b90509250925092565b60008151808452611e0f8160208601602086016120ec565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b606093841b7fffffffffffffffffffffffffffffffffffffffff000000000000000000000000908116825260e89390931b7fffffff0000000000000000000000000000000000000000000000000000000000166014820152921b166017820152602b0190565b73ffffffffffffffffffffffffffffffffffffffff91909116815260200190565b600073ffffffffffffffffffffffffffffffffffffffff8088168352861515602084015285604084015280851660608401525060a06080830152611f0f60a0830184611df7565b979650505050505050565b600060208252611f2d6020830184611df7565b9392505050565b60208082526010908201527f556e6578706563746564206572726f7200000000000000000000000000000000604082015260600190565b6020808252818101527f4578616374206f75747075742071756f7465206e6f7420737570706f72746564604082015260600190565b90815260200190565b600060808201868352602060808185015281875180845260a0860191508289019350845b81811015611fff57845173ffffffffffffffffffffffffffffffffffffffff1683529383019391830191600101611fcd565b505084810360408601528651808252908201925081870190845b8181101561203b57825163ffffffff1685529383019391830191600101612019565b5050505060609290920192909252949350505050565b93845273ffffffffffffffffffffffffffffffffffffffff92909216602084015263ffffffff166040830152606082015260800190565b60405181810167ffffffffffffffff811182821017156120a457fe5b604052919050565b600067ffffffffffffffff8211156120c057fe5b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b60005b838110156121075781810151838201526020016120ef565b83811115612116576000848401525b50505050565b73ffffffffffffffffffffffffffffffffffffffff8116811461213e57600080fd5b5056fea164736f6c6343000706000a";
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        name?: undefined;
        outputs?: undefined;
    } | {
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
    static createInterface(): MixedRouteQuoterV1Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): MixedRouteQuoterV1;
}

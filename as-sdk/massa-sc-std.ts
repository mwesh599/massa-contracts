// as-sdk/massa-sc-std.ts
@external("massa", "call")
export declare function call(
  address: string,
  functionName: string,
  parameter: string,
  coins: u64
): void;

@external("massa", "caller")
export declare function caller(): string;

@external("massa", "generate_event")
export declare function generateEvent(event: string): void;

@external("massa", "print")
export declare function print(message: string): void;

export type Action<TypeName extends string, T = null> = T extends null ? { type: TypeName; } : { type: TypeName; payload: T; };

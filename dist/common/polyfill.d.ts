declare const FallbackWeakRef: WeakRefConstructor;
type FallbackWeakRef<T extends WeakKey> = WeakRef<T>;
export { FallbackWeakRef };

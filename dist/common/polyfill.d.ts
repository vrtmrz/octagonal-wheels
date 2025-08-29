declare const FallbackWeakRef: WeakRefConstructor;
type FallbackWeakRef<T extends WeakKey> = WeakRef<T>;
declare const FallbackFinalizationRegistry: FinalizationRegistryConstructor;
type FallbackFinalizationRegistry<T> = typeof FinalizationRegistry<T>;
export { FallbackWeakRef, FallbackFinalizationRegistry };

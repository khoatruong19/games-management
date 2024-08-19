import React from "react";

export interface CreateContextOptions<ContextType> {
  /**
   * If `true`, React will throw if context is `null` or `undefined`
   * In some cases, you might want to support nested context, so you can set it to `false`
   */
  initialValues?: ContextType;
  strict?: boolean;
  errorMessage?: string;
  name?: string;
}

type CreateContextReturn<T> = [React.Provider<T>, () => T, React.Context<T>];

export default function createContext<ContextType>(
  options: CreateContextOptions<ContextType> = {}
) {
  const {
    initialValues,
    strict = true,
    errorMessage = "useContext must be inside a Provider with a value",
    name,
  } = options;

  const Context = React.createContext<ContextType | undefined>(initialValues);

  Context.displayName = name;

  function useContext() {
    const context = React.useContext(Context);
    if (!context && strict) throw new Error(errorMessage);

    return context;
  }

  return [
    Context.Provider,
    useContext,
    Context,
  ] as CreateContextReturn<ContextType>;
}

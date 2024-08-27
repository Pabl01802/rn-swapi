import { useEffect, useState } from "react";

export const useDebounce = (text: string, delay = 500) => {
  const [value, setValue] = useState<string>(text)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setValue(text.trim())
    }, delay)

    return () => clearTimeout(timeout)
  }, [text, delay])

  return value
}
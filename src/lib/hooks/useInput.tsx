import { RadioChangeEvent } from 'antd';
import React, { Dispatch, SetStateAction, useCallback, useState } from 'react';

export default function useInput(defaultValue: string) {
  const [input, setInput] = useState(defaultValue);
  const onChange = useCallback(
    (
      e:
        | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
        | RadioChangeEvent,
    ) => {
      setInput(e.target.value);
    },
    [],
  );
  const onReset = useCallback(() => setInput(''), []);
  return [input, onChange, onReset, setInput] as [
    string,
    typeof onChange,
    typeof onReset,
    Dispatch<SetStateAction<string>>,
  ];
}

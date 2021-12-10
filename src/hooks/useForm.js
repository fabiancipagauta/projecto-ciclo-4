import { useState } from 'react';

const useForm = (initialForm = {}) => {
  const [form, setForm] = useState(initialForm);

  const resetForm = () => {
    setForm(initialForm);
  };

  const handleInputChange = (e) => {
    const { value, type, name, checked } = e.target;

    setForm({
      ...form,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  return [form, handleInputChange, resetForm];
};

export default useForm;

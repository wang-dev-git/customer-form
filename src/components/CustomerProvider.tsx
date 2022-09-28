import { createContext, useContext, useState } from "react";

interface Customer {
  firstName: string;
  lastName: string;
  country: string;
  state: string;
  city?: string;
  street: string;
  zipecode: string;
  date: string;
  age?: number;
}

interface CustomersContextType {
  customers: Customer[];
  addCustomer: () => void;
}

const CustomersContext = createContext<CustomersContextType>({ customers: [] });

const CustomersProvider = ({ children }) => {
  const [customers, setCustomers] = useState<Customer[]>([]);

  const addCustomer = (newCustomer: Customer) => {
    setCustomers([...customers, newCustomer]);
  };

  return (
    <CustomersContext.Provider value={{ customers, addCustomer }}>
      {children}
    </CustomersContext.Provider>
  );
};

export default CustomersProvider;

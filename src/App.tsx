import "./styles.css";

import CustomerForm from "./components/CustomerForm";
import CustomersTable from "./components/CustomersTable";
import CustomerProvider from "./components/CustomerProvider";

export default function App() {
  return (
    <CustomerProvider>
      <CustomerForm />
      <CustomersTable />
    </CustomerProvider>
  );
}

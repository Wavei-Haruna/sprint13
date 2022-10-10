import fetch from "node-fetch";

interface CustomerItem {
  name: string;
  address: {
    street: string;
    suite: string;
  };
  company: {
    name: string;
  };
}

interface Customer {
  name: string;
  street_address: string;
  company_name: string;
}

type PromisedCustomer = Promise<Customer[]>;

const apiURL = "https://jsonplaceholder.typicode.com/users";
const fetchUsers = async (url: string): PromisedCustomer => {
  const resposnse = await fetch(url).then((resposnse) => resposnse.json());
  return resposnse.map((customer: CustomerItem): Customer => {
    return {
      name: customer.name,
      street_address: `${customer.address.suite} ${customer.address.street}`,
      company_name: customer.company.name,
    };
  });
};
fetchUsers(apiURL).then((users) => console.log(users));

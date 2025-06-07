import React from "react";
import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import { UserProps } from "@/interfaces";

const Users: React.FC<UserProps> = ({ users }: any) => {
  return (
    <div>
      <header>
        <Header />
      </header>

      <main className=" px-6">
        <h1 className="text-4xl text-center font-bold">All Users</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {users?.map((user: UserProps, index: number) => (
              <UserCard
                username={user.username}
                name={user.name}
                email={user.email}
                id={user.id}
                key={index}
                address={user.address}
                phone={user.phone}
                website={user.website}
                company={user.company}
              />
            )
          )}
        </div>
      </main>
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

  return {
    props: {
      users,
    },
  };
}

export default Users;

import { getNameAndSurname } from "@/helpers/getNameAndSurname";
import { IChild } from "@/types/IChild";
import { UserType } from "@/types/UserType";
import { useEffect, useState } from "react";

interface ISelectValue {

}

export const useFilteredUsers = (users: UserType[], name: string, selectValue?: ISelectValue) => {

  const [filteredUsers, setFilteredUsers] = useState<UserType[]>(users);

  useEffect(() => {
    setFilteredUsers(
      users
        .filter(user => getNameAndSurname(user.name).toLowerCase().includes(name.toLowerCase()))
    )
  }, [users, name, selectValue]);

  return { filteredUsers };
}
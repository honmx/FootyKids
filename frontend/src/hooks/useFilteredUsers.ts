import { selectUserFilterValues } from "@/data/selectUserFilterValues";
import { getNameAndSurname } from "@/helpers/getNameAndSurname";
import { IChild } from "@/types/IChild";
import { UserType } from "@/types/UserType";
import { useEffect, useState } from "react";

export const useFilteredUsers = (users: UserType[], name: string, selectValueId: number) => {

  const [filteredUsers, setFilteredUsers] = useState<UserType[]>(users);

  useEffect(() => {
    setFilteredUsers(
      users
        .filter(user => getNameAndSurname(user.name).toLowerCase().includes(name.toLowerCase()))
        .filter(selectUserFilterValues.find(value => value.id === selectValueId)?.filterFn || (() => true))
    )
  }, [users, name, selectValueId]);

  return { filteredUsers };
}
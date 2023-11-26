import { IGroup } from "@/types/IGroup";
import { Dispatch, SetStateAction, createContext } from "react";

interface IGroupContext {
  groupFromContext: IGroup;
  setGroupFromContext: Dispatch<SetStateAction<IGroup>>;
}

export const GroupContext = createContext<IGroupContext>({
  groupFromContext: {} as IGroup,
  setGroupFromContext: () => {}
})
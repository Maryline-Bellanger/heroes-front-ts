import { List } from '@mui/material';
import React from 'react';
import NavItem from './NavItem';

interface INavListItemProps {
  selectedPageTitle: string;
  setSelectedPageTitle: React.Dispatch<React.SetStateAction<string>>;

}

function NavItemList(
  {setSelectedPageTitle }: INavListItemProps
) {
  return (
    <List>
      <NavItem
        name="Tous les héros"
        path="heroes/all"
        selectedPageTitle="Tous les héros"
        setSelectedPageTitle={setSelectedPageTitle}

      />
      <NavItem
        name="Héros Marvel"
        path="heroes/marvel"
        selectedPageTitle="Les héros Marvel"
        setSelectedPageTitle={setSelectedPageTitle}

      />
      <NavItem
        name="Héroïnes"
        path="heroes/female"
        selectedPageTitle="Les héroïnes"
        setSelectedPageTitle={setSelectedPageTitle}
      />
      <NavItem
        name="Héros endurants"
        path="heroes/stamina"
        selectedPageTitle="Les héros endurants"
        setSelectedPageTitle={setSelectedPageTitle}
      />
    </List>
  )
}

export default NavItemList;
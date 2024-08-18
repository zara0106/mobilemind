import { logo } from "@/assets";
import { NavLink } from "react-router-dom";
import { navigations } from "./navigations";
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import { useGetAllLevels } from "@/hooks/use-get-all-levels";
import { TNavigation } from "@/types";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { paths } from "@/constants/paths";

type PropsNavItem = {
  navigation: TNavigation;
};

const NavItem = ({ navigation }: PropsNavItem) => {
  const { link, icon, label, subItem } = navigation;

  return (
    <>
      {subItem && subItem?.length > 0 ? (
        <Accordion type="single" collapsible className="w-full p-0">
          <AccordionItem value="item-1" className="border-none text-white">
            <AccordionTrigger className="h-auto py-0 hover:no-underline font-normal">
              <div className="flex gap-x-3 justify-start text-white text-xl">
                <Icon icon={icon} className="text-3xl" />
                <span>{label}</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pl-10 mt-3 flex flex-col gap-y-3">
              {subItem?.map((item, index) => (
                <NavLink
                  key={index}
                  to={item.link}
                  className={({ isActive }) =>
                    `flex text-white text-xl  ${isActive && ""}`
                  }
                >
                  <Icon icon={item.icon} className="text-3xl" />
                  <span>{item.label}</span>
                </NavLink>
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ) : (
        <NavLink
          to={link}
          className={({ isActive }) =>
            `flex gap-x-3 text-white text-xl  ${isActive && ""}`
          }
        >
          <Icon icon={icon} className="text-3xl" />
          <span>{label}</span>
        </NavLink>
      )}
    </>
  );
};

export const Sidebar = () => {
  const [navigationsLists, setNavigationsListst] = useState(navigations);
  const { allLevels } = useGetAllLevels();

  const getSubitemLevels = () => {
    if (
      !navigationsLists.some((navigation) => navigation.label === "Etudiants")
    ) {
      setNavigationsListst((currentValue) => {
        const navigationsSubitem: TNavigation[] = [];

        allLevels.forEach((level) => {
          navigationsSubitem.push({
            icon: "",
            label: `Niveau ${level.nameLevel}`,
            link: `${paths.students}/${level.id}`,
          });
        });

        return [
          ...currentValue,
          {
            icon: "ph:student",
            label: "Etudiants",
            link: "",
            subItem: navigationsSubitem,
          },
        ];
      });
    }
  };

  useEffect(() => {
    if (allLevels.length > 0) {
      getSubitemLevels();
    }
  }, [allLevels]);

  return (
    <aside className="pt-5 flex flex-col h-full gap-y-5 shadow-lg">
      <img src={logo} alt="logo" className="h-24 object-contain" />

      <div className="bg-green flex-1 rounded-t-3xl p-5 pt-10 flex flex-col gap-y-5">
        {navigationsLists.map((navigation, index) => (
          <NavItem key={index} navigation={navigation} />
        ))}
      </div>
    </aside>
  );
};

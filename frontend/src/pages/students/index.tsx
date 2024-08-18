import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useGetAllFilieres } from "@/hooks/use-get-all-filieres";
import { useGetAllLevels } from "@/hooks/use-get-all-levels";
import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import { DateRange } from "react-day-picker";
import { useParams } from "react-router-dom";
import { StudentsTable } from "./students-table";
import { useGetAllCreneaux } from "@/hooks/use-get-all-creneaux";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useGetAllClasses } from "@/hooks/use-get-all-classes";
import { TimePicker } from "@/components/ui/date-time-picker/time-picker";
import { TimeValue } from "react-aria";
import { TCreneauDto } from "@/types";
import axios from "axios";
import { Loader2 } from "lucide-react";

export const Students = () => {
  const { id } = useParams<{ id: string }>();
  const { allLevels } = useGetAllLevels();
  const { allFilieres } = useGetAllFilieres();
  const { allCreneaux, refetch: refetchCreneau } = useGetAllCreneaux();
  const { allClasses } = useGetAllClasses();
  const currentLevel = allLevels.find((level) => level.id === Number(id));
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [schoolYear, setSchoolYear] = useState<DateRange | undefined>();
  const [tabsSelected, setTabsSelected] = useState<string>();
  const [subjectSelected, setSubjectSelected] = useState<number>();
  const [isOpenDialog, setIsOpenDialog] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [timeStart, setTimeStart] = useState<TimeValue>();
  const [timeEnd, setTimeEnd] = useState<TimeValue>();
  const [classeSelected, setClasseSelected] = useState<string>();

  const setInitialState = () => {
    setTabsSelected(allFilieres.length > 0 ? allFilieres[0].abreviation : "");
    setSubjectSelected(allCreneaux.length > 0 ? allCreneaux[0].id : 0);
  };

  const newCreneau = () => {
    if (timeStart && timeEnd && classeSelected) {
      const creneau: TCreneauDto = {
        time: `${timeStart.hour}:${timeStart.minute} - ${timeEnd.hour}:${timeEnd.minute}`,
        classesId: Number(classeSelected),
        Date: date?.toISOString() ?? new Date().toISOString(),
      };
      setIsLoading(true);
      axios.post("http://localhost:3000/creneau", creneau);
      setTimeout(() => {
        refetchCreneau();
        setIsLoading(false);
        setIsOpenDialog(false);
      }, 3000);
    }
  };

  useEffect(() => {
    setInitialState();
  }, [allFilieres]);

  return (
    <div>
      <Input type="text" placeholder="Recherche" />

      <div className="mt-5">
        <h1 className="text-2xl">Niveau {currentLevel?.nameLevel}</h1>
        <div className="flex gap-x-10 text-gray-2 ">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "justify-start text-left font-normal border-none bg-transparent p-0 gap-x-1",
                  !date && "text-muted-foreground"
                )}
              >
                <Icon icon="ph:calendar-thin" className="text-xl" />
                <span>Date : &nbsp;</span>
                {date ? format(date, "PPP") : <span>Choisir un date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
                disabled={{ after: new Date() }}
              />
            </PopoverContent>
          </Popover>

          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "justify-start text-left font-normal border-none bg-transparent p-0 gap-x-1",
                  !date && "text-muted-foreground"
                )}
              >
                <Icon icon="fa:graduation-cap" className="text-xl" />
                <span>Année scolaire : &nbsp;</span>
                {date ? format(date, "PPP") : <span>Choisir un date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="range"
                selected={schoolYear}
                onSelect={setSchoolYear}
                initialFocus
                disabled={{ after: new Date() }}
              />
            </PopoverContent>
          </Popover>
        </div>

        <div className="flex gap-x-10 mt-3 border border-transparent border-b-gray-2">
          {allFilieres.map((filiere) => (
            <button
              key={filiere.abreviation}
              className={` ${
                tabsSelected === filiere.abreviation &&
                "border-2 border-transparent border-b-green "
              }`}
              onClick={() => setTabsSelected(filiere.abreviation)}
            >
              {filiere.extension}
            </button>
          ))}
        </div>

        <div className="flex gap-x-5 items-center my-5">
          <p className="text-green">Matières : </p>
          {allCreneaux.map((creneau) => (
            <div
              key={creneau.id}
              className={`h-20 w-56 cursor-pointer relative bg-white p-3 rounded-xl border border-gray-2 ${
                subjectSelected === creneau.id &&
                "!bg-gradient-to-tr from-green  to-green-3 text-white"
              }`}
              onClick={() => setSubjectSelected(creneau.id)}
            >
              <p>{creneau.classes.nameClasses}</p>
              <p
                className={`text-gray-2 ${
                  subjectSelected === creneau.id && "text-green-2"
                }`}
              >
                {creneau.time}
              </p>

              <DropdownMenu>
                <DropdownMenuTrigger>
                  <button className="absolute right-3 top-3">
                    <Icon
                      icon="mingcute:more-2-line"
                      className={`text-xl text-gray-2 ${
                        subjectSelected === creneau.id && "text-white"
                      }`}
                    />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="absolute -top-12 -right-48">
                  {/* <DropdownMenuSeparator /> */}
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Billing</DropdownMenuItem>
                  <DropdownMenuItem>Team</DropdownMenuItem>
                  <DropdownMenuItem>Subscription</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          ))}

          <div
            onClick={() => setIsOpenDialog(true)}
            className="h-20 flex justify-center cursor-pointer items-center w-56 border-2 border-dashed border-gray-2 rounded-xl"
          >
            <Icon icon="fa6-solid:plus" className="text-3xl text-gray-2" />
          </div>
          <Dialog open={isOpenDialog}>
            <DialogContent
              onClick={() => setIsOpenDialog(false)}
              className="sm:max-w-[425px]"
            >
              <DialogHeader>
                <DialogTitle>Ajout créneau</DialogTitle>
              </DialogHeader>
              <div className="py-4">
                <div>
                  <Label>Matières</Label>
                  <Select
                    value={classeSelected}
                    onValueChange={(e) => setClasseSelected(e)}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Selectionner le matière" />
                    </SelectTrigger>
                    <SelectContent>
                      {allClasses.map((classe) => (
                        <SelectItem key={classe.id} value={`${classe.id}`}>
                          {classe.nameClasses}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="mt-5">
                  <Label htmlFor="username" className="text-right">
                    Heure
                  </Label>
                  <div className="flex justify-between gap-x-5 items-center text-sm">
                    <TimePicker value={timeStart} onChange={setTimeStart} />
                    <span>Jusqu'à </span>
                    <TimePicker value={timeEnd} onChange={setTimeEnd} />
                  </div>
                </div>
              </div>

              <DialogFooter>
                <Button
                  onClick={newCreneau}
                  className="bg-green hover:bg-green-2 hover:text-gray-2"
                >
                  {isLoading ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    <span>Enregistrer</span>
                  )}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        <StudentsTable />
      </div>
    </div>
  );
};

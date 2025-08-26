"use client"
import * as React from "react"
import { Button, ButtonAuto } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
    DialogClose,
  } from "@/components/ui/dialog"
import { Checkbox } from "@/components/ui/checkbox"
import { CircleCheck, CircleAlert, CircleX, EllipsisVertical, ChevronDownIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { capitalize, cn, formatNatural } from "@/lib/utils";
import { faker } from "@faker-js/faker";

export const Columns = [
    {
        header : "Judul",
    },
    {
        header : "Tanggal",
    },
    {
        header : "Status",
    },
]

export function GenerateArticle(count = 50){
    return Array.from({ length: count }).map((_, i) => ({
        judul: faker.lorem.sentence(),
        tanggal: faker.date.recent({ days: 30 }),
        status: faker.number.int({min: 1, max: 3}),
    }));
}

export function Calendar22({dateValue}) {
    const [open, setOpen] = React.useState(false)
    const [date, setDate] = React.useState(undefined)
    return (
      <div className="flex flex-col gap-3">
        <Label htmlFor="date" className="px-1">
          Tanggal
        </Label>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <ButtonAuto
              variant="outline"
              id="date"
              className="w-full justify-between font-normal"
            >
              {date ? capitalize(formatNatural(date)) : capitalize(formatNatural(dateValue))}
              <ChevronDownIcon />
            </ButtonAuto>
          </PopoverTrigger>
          <PopoverContent className="w-auto overflow-hidden p-0" align="start">
            <Calendar
              mode="single"
              selected={date}
              captionLayout="dropdown"
              onSelect={(date) => {
                setDate(date)
                setOpen(false)
              }}
            />
          </PopoverContent>
        </Popover>
      </div>
    )
  }

export const UploadButton = () => {
    return (
        <div>
            <Button>Unggah</Button>
        </div>
    )
};

const Value = GenerateArticle(5);
let cloneCheckState = new Array(5).fill(false);

export const DeleteAllButton = () => {
    return (
        <div className="mx-4">
            <Button disabled={cloneCheckState.find((value) => {return value == true}) == undefined} variant="destructive">Hapus</Button>
        </div>
    )
};

export const ArticleTable = () => {
    Value.sort((a, b) =>b.tanggal - a.tanggal);
    const [checkState, setCheckState] = React.useState(new Array(5).fill(false));
    const [selectAllState, setSelectAllState] = React.useState(false);
    return (
        <div>
            <div className="flex justify-end mb-4">
            <DeleteAllButton/>
            <UploadButton/>
            </div>
           
            <div className="w-full rounded-md border shadow-sm">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead key="Check">
                                <Checkbox
                                    onClick={() => {
                                        if (!selectAllState == false) {
                                            setCheckState(new Array(5).fill(false));
                                            cloneCheckState.fill(false);
                                        } else {
                                            setCheckState(new Array(5).fill(true));
                                            cloneCheckState.fill(true);
                                        }
                                        setSelectAllState(!selectAllState);
                                    }}
                                    checked={selectAllState || ((cloneCheckState.every((value) => { return value == false }) == false) && "indeterminate")}
                                />
                            </TableHead>
                            {Columns.map((column, i) => (
                                <TableHead key={i + 1} className={cn(i == Columns.length - 1 ? "text-left" : "", i == 0 ? "w-[25vw]" : "")}>
                                    {column.header}
                                </TableHead>
                            ))}
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {Value.map((value, i) => (
                            <TableRow key={i + 1} className="">
                                <TableHead>
                                    <Checkbox
                                        id={"Check" + (i + 1)}
                                        onClick={() => {
                                            if (selectAllState) { setSelectAllState(false) }
                                            cloneCheckState[i] = !checkState[i]; setCheckState((prevState) => { return { ...prevState, [i]: !checkState[i] } });
                                        }}
                                        checked={selectAllState || checkState[i]}
                                    />
                                </TableHead>

                                <Dialog>
                                    <DialogTrigger asChild>
                                        <TableCell>{value.judul}</TableCell>
                                    </DialogTrigger>
                                    <DialogContent>
                                        <DialogHeader>
                                            <DialogTitle>Detail Artikel</DialogTitle>
                                            <DialogDescription>
                                                Ubah artikel sesuai keinginanmu.
                                            </DialogDescription>
                                        </DialogHeader>
                                        <div className="grid flex-1 auto-rows-min gap-6 px-4">
                                            <div className="grid gap-3">
                                                <Label htmlFor="sheet-demo-name">Judul</Label>
                                                <Input id="sheet-demo-name" defaultValue={value.judul} />
                                            </div>
                                            <div className="grid gap-3">
                                                <Calendar22 dateValue={value.tanggal} />
                                            </div>
                                        </div>

                                        <DialogFooter className="w-full">
                                            <ButtonAuto className="w-full" type="submit">Simpan</ButtonAuto>
                                            <ButtonAuto className="w-full" variant="destructive">Hapus</ButtonAuto>
                                            <DialogClose asChild>
                                                <ButtonAuto className="w-full" variant="outline">Tutup</ButtonAuto>
                                            </DialogClose>
                                        </DialogFooter>
                                    </DialogContent>
                                </Dialog>

                                <TableCell>{capitalize(formatNatural(value.tanggal))}</TableCell>
                                <TableCell className="flex items-center justify-right">
                                    {value.status == 1 ? <CircleX color="red" className="pr-[0.5vw] h-4 w-4 md:h-6 md:w-6" /> : value.status == 2 ? <CircleAlert color="orange" className="pr-[0.5vw] h-4 w-4 md:h-6 md:w-6" /> : <CircleCheck className="pr-[0.5vw] h-4 w-4 md:h-6 md:w-6" color="green" />}
                                    {value.status == 1 ? "Declined" : value.status == 2 ? "Pending" : "Published"}
                                </TableCell>
                            </TableRow>

                        ))}
                    </TableBody>
                </Table>
            </div>

        </div>
        
    )
};

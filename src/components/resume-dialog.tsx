"use client"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

const RESUME_FILES = {
  en: "/EN_PRAYITNO_ACHMADNAUFAL.pdf",
  de: "/DE_PRAYITNO_ACHMADNAUFAL.pdf",
} as const

interface ResumeDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ResumeDialog({ open, onOpenChange }: ResumeDialogProps) {
  const handleSelect = (language: keyof typeof RESUME_FILES) => {
    window.open(RESUME_FILES[language], "_blank", "noopener,noreferrer")
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Choose a language</DialogTitle>
          <DialogDescription>
            Select which version of the CV you&apos;d like to open.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline" onClick={() => handleSelect("de")}>
            German
          </Button>
          <Button onClick={() => handleSelect("en")}>English</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

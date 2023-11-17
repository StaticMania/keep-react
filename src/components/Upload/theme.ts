import { keepUploadTheme } from '.'

/**
 * Represents the theme configuration for the upload component.
 */
export const uploadTheme: keepUploadTheme = {
  input: {
    disabled: 'cursor-not-allowed opacity-50 select-none',
    base: 'flex flex-col items-center justify-center gap-5 rounded-lg bg-metal-25 p-5 transition-all hover:bg-metal-50',
    label: {
      base: 'flex w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-metal-300',
      root: 'flex flex-col items-center justify-center pt-5 pb-6',
      icon: 'flex h-16 w-16 items-center justify-center rounded-full border border-metal-100 bg-white',
      dragDrop: 'mb-2 text-body-4 md:text-body-2 font-semibold text-metal-500',
      fileType: 'text-center text-body-6 md:text-body-5 text-metal-400',

      upload: {
        base: 'relative mt-5 flex cursor-pointer flex-col items-center space-y-2',
        input: 'absolute top-0 left-0 cursor-pointer opacity-0 hidden',
        fileName: 'text-body-6 md:text-body-5 text-metal-400 text-center',
      },
    },
  },
  uploadFailed: {
    base: 'relative z-40 w-full rounded-lg border border-error-50 p-2.5 px-5 bg-error-25',
    bgColor: 'absolute top-0 left-0 z-[-1] h-full bg-error-50 overflow-hidden',
    root: {
      base: 'mb-2 flex items-center justify-between',
      status: 'text-body-5 font-medium text-error-500',
      statusBox: {
        base: 'flex items-center gap-3',
        count: 'text-body-6 font-normal text-error-400',
        dot: 'h-2.5 w-2.5 rounded-full bg-error-400',
        time: 'text-body-6 font-normal text-error-400',
      },
      confirmBox: {
        base: 'flex items-center gap-5',
        restart: 'flex h-6 w-6 items-center justify-center rounded-full bg-error-50 text-metal-500',
        dismiss: 'flex h-6 w-6 items-center justify-center rounded-full bg-error-50',
      },
    },
    progress: {
      bgBar: 'h-3.5 bg-error-50 w-full relative',
      mainBar: 'absolute left-0 h-full bg-error-500',
    },
  },
  uploadHorizontal: {
    disabled: 'cursor-not-allowed opacity-50 select-none',
    base: 'flex flex-col items-center justify-center gap-5 rounded-lg bg-metal-25 p-5 transition-all hover:bg-metal-50 ',
    label: {
      base: 'relative w-full cursor-pointer items-center  justify-between space-y-5 rounded-lg border-2 border-dashed border-metal-300 p-4',
      root: {
        base: 'flex items-center justify-between',
        iconBox: {
          base: 'flex items-center gap-5',
          icon: 'flex h-16 w-16 items-center justify-center rounded-full border border-metal-100 bg-white',
          dragDrop: 'text-body-4 2xl:text-body-2 font-semibold text-metal-500',
          fileType: 'text-body-5 text-metal-400',
        },
        upload: {
          base: 'relative hidden md:flex cursor-pointer items-center  md:gap-5',
          input: 'absolute top-0 w-full left-0 scale-100 opacity-0',
          fileName: 'text-body-5 text-metal-400',
          fileSize: 'text-body-5 xl:block hidden text-metal-400',
        },
      },
    },
  },
  uploadPending: {
    base: 'relative z-20 w-full rounded-lg border border-metal-200 p-2.5 px-5 overflow-hidden',
    bgColor: 'absolute top-0 left-0 z-[-1] h-full bg-primary-50 overflow-hidden',
    root: {
      base: 'mb-2 flex items-center justify-between',
      status: 'text-body-5 font-medium text-metal-500',
      statusBox: {
        base: 'flex items-center gap-3',
        count: 'text-body-6 font-normal text-metal-400',
        dot: 'h-2.5 w-2.5 rounded-full bg-metal-400',
        time: 'text-body-6 font-normal text-metal-400',
      },
      confirmBox: {
        base: 'flex items-center gap-5',
        pause: 'flex h-6 w-6 items-center justify-center rounded-full bg-metal-100 text-metal-500',
        dismiss: 'flex h-6 w-6 items-center justify-center rounded-full bg-error-50',
      },
    },
    progress: {
      bgBar: 'h-3.5 bg-primary-50 w-full relative',
      mainBar: 'absolute left-0 h-full bg-primary-500',
    },
  },
  uploadSuccess: {
    base: 'relative z-40 w-full rounded-lg border border-success-100 p-2.5 px-5',
    bgColor: 'absolute top-0 left-0 z-[-1] h-full w-full rounded-lg bg-success-25 p-5',
    root: {
      base: 'mb-2 flex items-center justify-between',
      left: {
        base: 'flex items-center gap-1',
        fileName: 'text-body-5 font-medium text-success-500',
        fileSize: 'text-body-5 font-medium text-success-500',
      },

      confirmBox: {
        base: 'flex items-center gap-3',
        checked: 'flex h-8 w-8 border-spacing-1 items-center justify-center rounded-full border border-success-100',
        divider: 'h-full w-px bg-success-200 py-4',
        trash:
          'flex h-8 w-8 border-spacing-1 items-center justify-center rounded-full border border-error-100 bg-error-25',
      },
    },
  },
}

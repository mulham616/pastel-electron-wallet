import { useState } from 'react'
import {
  TImageOptimizationState,
  useImageOptimizationState,
} from './imageOptimization/imageOptimization.state'

export enum Step {
  inputData,
  upload,
  afterUpload,
  preview,
  submit,
  approved,
}

const firstStep = Step.inputData
const lastStep = Step.approved
const stepsCount = lastStep + 1

export type TNFTData = {
  title: string
  hashtags: string[]
  series?: string
  copies: number
  royalty: number
  website?: string
  video?: string
  green: boolean
  description?: string
}

export type TCrop = {
  x: number
  y: number
  width: number
  height: number
}

export type TImageOrientation = 'portrait' | 'landscape'

export type TImage = {
  file: File
  url: string
  width: number
  height: number
  maxWidth: number
}

export type TAddNFTState = {
  step: Step
  stepsCount: number
  nftData?: TNFTData
  image?: TImage
  crop?: TCrop
  isLossLess: boolean
  estimatedFee: number | undefined
  optimizationState: TImageOptimizationState
  setStep(step: Step): void
  setNftData(data: TNFTData): void
  setCrop(crop: TCrop): void
  setImage(image: TImage): void
  goBack(): void
  goToNextStep(): void
  setIsLossLess(value: boolean): void
  setEstimatedFee(value: number | undefined): void
}

export type TUseAddNFTProps = {
  onClose(): void
}

export const useAddNFTState = ({ onClose }: TUseAddNFTProps): TAddNFTState => {
  const [step, setStep] = useState<Step>(Step.inputData)
  const [nftData, setNftData] = useState<TNFTData>()
  const [crop, setCrop] = useState<TCrop>()
  const [image, setImage] = useState<TImage>()
  const [isLossLess, setIsLossLess] = useState(true)
  const [estimatedFee, setEstimatedFee] = useState<number>()
  const optimizationState = useImageOptimizationState()

  return {
    step,
    stepsCount,
    nftData,
    setNftData,
    image,
    setImage,
    crop,
    isLossLess,
    estimatedFee,
    setStep,
    setCrop,
    setEstimatedFee,
    optimizationState,
    setIsLossLess,
    goBack() {
      if (step > firstStep) {
        setStep(step - 1)
      } else {
        onClose()
      }
    },
    goToNextStep() {
      if (step < lastStep) {
        setStep(step + 1)
      } else {
        onClose()
      }
    },
  }
}
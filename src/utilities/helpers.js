// Create unique identifier for label and input pairing
let UUID = 0
export default function useGenerateUniqueID() {
  const getID = () => {
    UUID++
    return UUID
  }

  return { getID }
}

// Navigate to Top
export const scrollToTop = () => {
  window.scrollTo(0, 0)
}

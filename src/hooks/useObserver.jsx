import { useEffect, useState } from "react";

export default function useObserver(reference) {
    const [entryObserver, setEntryObserver] = useState(false);
    const [contact, setContact] = useState(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
          entries => {
            const entry = entries[0]
            setEntryObserver(entry.isIntersecting)
            if (entryObserver) {
                setContact('#contact')
            }
          },
          {
            rootMargin: '0px 0px 0px',
            root: null,
            threshold: 0.5
          }
        )
        observer.observe(reference.current)
      }, [entryObserver])

    return contact
}
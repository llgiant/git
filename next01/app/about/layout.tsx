import React from 'react'
import styles from './styles.module.css'
type Props = {}

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <nav>About navbar</nav>
            <main className={styles.main}>
                {children}
            </main>
        </>
    )
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <h2 className="text-4xl text-center">byebye</h2>
        {children}
    </>
  );
}


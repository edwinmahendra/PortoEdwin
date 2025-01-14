import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";

const inter = Nunito_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Home | Berijalan Batch 9",
    template: "%s | Berijalan Batch 9",
  },
  description: "Next JS Web Application Batch 9",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Providers>
          <Container>{children}</Container>
        </Providers> */}
      </body>
    </html>
  );
}

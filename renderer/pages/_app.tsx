import { HeroUIProvider } from "@heroui/system";
import type { AppProps } from "next/app";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<HeroUIProvider>
			<Component {...pageProps} />
		</HeroUIProvider>
	);
}

export default MyApp;

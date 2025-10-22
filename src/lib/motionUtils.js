// helper to return in-view props — on small screens show immediately (no intersection delays)
export function getInViewProps({ amount = 0.18, once = true } = {}) {
	// safe window check for SSR
	const isSmall = typeof window !== "undefined" && window.innerWidth <= 768;
	if (isSmall) {
		// on small devices render visible immediately to avoid missed intersection triggers
		return { initial: "show" };
	}
	return { initial: "hidden", whileInView: "show", viewport: { once, amount } };
}

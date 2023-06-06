type Options = {
	/**
	 * Resolves to the `root` value from Vite config.
	 * @default process.cwd()
	 */
	root?: string;

	/**
	 * Relative path to the directory to search for page components.
	 * @default src/pages
	 */
	pageDir?: string;

	/**
	 * Extend route records
	 */
	extendRoute?: (
		route: ReactRouteBase,
		parent: ReactRouteBase | undefined
	) => ReactRouteBase | void;
};

type ResolverContext = {
	/**
	 * The path glob to search when resolving pages.
	 * @default src/pages
	 */
	dir?: string;
	/**
	 * List of directories to exclude when resolving pages.
	 * @default '[.git node_modules, .git]'
	 */
	exclude?: string[];
};

type UserOptions = Partial<Options> & {};

type ReactRouteBase = {
	caseSensitive?: boolean;
	children?: ReactRouteBase[];
	element?: string;
	index?: boolean;
	path?: string;
};

export type { Options, UserOptions, ResolverContext, ReactRouteBase };

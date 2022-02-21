import * as React from "react";
import copy from "copy-to-clipboard";

interface Props {
	text: string;
	children: (childProps: { copyToClipboard: () => void }) => React.ReactNode;
	onCopy: (onCopyProps: { text: string; copied: boolean }) => void;
	options?: {
		debug?: boolean;
		message?: string;
		format?: string;
	};
}

export const CopyToClipboard = ({ text, children, onCopy, options }: Props) => {
	const copyToClipboard = (): void => {
		const result: boolean = copy(text, options);
		onCopy({ text: text, copied: result });
	};

	return <>{children({ copyToClipboard })}</>;
};

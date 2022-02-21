import * as React from "react";
import copy from "copy-to-clipboard";

export const CopyToClipboard = (props: {
	text: string;
	children: (childProps: { copyToClipboard: () => void }) => React.ReactNode;
	onCopy: (onCopyProps: { text: string; copied: boolean }) => void;
	options?: {
		debug?: boolean;
		message?: string;
		format?: string;
	};
}) => {
	const copyToClipboard = (): void => {
		const result: boolean = copy(props.text, props.options);
		props.onCopy({ text: props.text, copied: result });
	};

	return <>{props.children({ copyToClipboard })}</>;
};

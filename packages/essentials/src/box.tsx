import * as React from 'react';

export interface BoxProps {
	/****** Group: Layout *******/

	/**
	 * @name Direction
	 * @default Row
	 * @group Layout
	 * @control ButtonGroup
	 * */
	flexDirection?: FlexDirection;

	/**
	 * @name Align
	 * @default Stretch
	 * @group Layout
	 * @control ButtonGroup
	 * */
	alignItems?: AlignItems;

	/**
	 * @name Justify
	 * @default Start
	 * @group Layout
	 * @control ButtonGroup
	 * */
	justifyContent?: JustifyContent;

	/**
	 * @name Children
	 * @default Don't wrap
	 * @group Layout
	 * @control ButtonGroup
	 * */
	flexWrap?: FlexWrap;

	/****** Group: Flex Children *******/

	/**
	 * @name Sizing
	 * @default Shrink if needed
	 * @group Flex Child
	 * @control ButtonGroup
	 * @description Settings affect only this element, if inside a Flexible Layout.
	 * */
	flex?: Flex;

	/****** Group: Size *******/

	/**
	 * @name Width
	 * @example auto
	 * @unit px|%|em|vw|vh
	 * @group Size & Spacing
	 * */
	width?: string;

	/**
	 * @name Height
	 * @example auto
	 * @unit px|%|em|vw|vh
	 * @group Size & Spacing
	 * */
	height?: string;

	/**
	 * @name Padding
	 * @default 0
	 * @unit px|%|em|vw|vh
	 * @group Size & Spacing
	 * */
	padding?: string;

	/**
	 * @name Margin
	 * @default 0
	 * @unit px|%|em|vw|vh
	 * @group Size & Spacing
	 * */
	margin?: string;

	/****** Group: Styling *******/

	/**
	 * @name Background Color
	 * @group Styling
	 * @control color
	 * */
	backgroundColor?: string;

	/****** Group: Border *******/

	/**
	 * @name Radius
	 * @default 0
	 * @unit px|%|em
	 * @group Border
	 * @control slider
	 * */
	borderRadius?: string;

	/**
	 * @name Width
	 * @default none
	 * @unit px|em
	 * @group Border
	 * */
	borderWidth?: string;

	/**
	 * @name Color
	 * @default #000000
	 * @group Border
	 * @control color
	 * */
	borderColor?: string;

	children?: React.ReactNode;
}

export enum Flex {
	/** @name Shrink if needed */
	ShrinkIfNeeded,
	/** @name Grow if possible */
	GrowIfPossible,
	/** @name Don't shrink or grow */
	DontShrinkOrGrow,
	/** @name Customize grow and shrink behavior */
	CustomFlex
}

export enum FlexDirection {
	/** @name Row */
	Row = 'row',
	/** @name Column */
	Column = 'column'
}

export enum FlexWrap {
	/** @name Don't wrap */
	Nowrap = 'nowrap',
	/** @name Wrap */
	Wrap = 'wrap'
}

export enum JustifyContent {
	/** @name Start @icon FlexJustifyStart */
	'flex-start' = 'flex-start',

	/** @name Center @icon FlexJustifyCenter */
	'center' = 'center',

	/** @name End @icon FlexJustifyEnd*/
	'flex-end' = 'flex-end',

	/** @name Space Between @icon FlexJustifySpaceBetween */
	'space-between' = 'space-between',

	/** @name Space Around @icon FlexJustifySpaceAround */
	'space-around' = 'space-around'
}

export enum AlignItems {
	/** @name Start @icon FlexAlignStart */
	'flex-start' = 'flex-start',

	/** @name Center @icon FlexAlignCenter */
	'center' = 'center',

	/** @name Bottom @icon FlexAlignEnd */
	'flex-end' = 'flex-end',

	/** @name Stretch @icon FlexAlignStretch */
	'stretch' = 'stretch',

	/** @name Baseline @icon FlexAlignBaseline */
	'baseline' = 'baseline'
}

/**
 * @name Flexible Layout
 * @description  for flexible responsive layout structure
 * @icon Box
 * @patternType synthetic:box
 */
export const Box: React.SFC<BoxProps> = props => {
	function buildFlexProperty() {
		switch (props.flex) {
			case Flex.ShrinkIfNeeded:
				return '0 1 auto';
			case Flex.GrowIfPossible:
				return '1 0 auto';
			case Flex.DontShrinkOrGrow:
				return '0 0 auto';
		}
	}

	return (
		<div
			style={{
				flexDirection: props.flexDirection,
				flexWrap: props.flexWrap,
				flex: buildFlexProperty(),
				alignItems: props.alignItems,
				display: 'flex',
				justifyContent: props.justifyContent,
				width: props.width,
				height: props.height,
				padding: props.padding,
				margin: props.margin,
				borderRadius: props.borderRadius,
				borderWidth: props.borderWidth,
				borderStyle: props.borderWidth === 'none' ? 'none' : 'solid',
				borderColor: props.borderColor,
				backgroundColor: props.backgroundColor
			}}
		>
			{props.children}
		</div>
	);
};

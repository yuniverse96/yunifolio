import React, { useEffect, useRef, useState } from "react";

function fakeData() {
	const KB = 1024;
	const MB = KB * 1024;
	const GB = MB * 1024;
	const maxMemory = 60 * GB;

	const percentData = [
		{ name: "HTML", color: "html", percent: 18 },
		{ name: "CSS", color: "css", percent: 22 },
		{ name: "JS", color: "js", percent: 20 },
		{ name: "JQUERY", color: "jquery", percent: 24 },
		{ name: "REACT", color: "react", percent: 5 }
	];

	const data = percentData.map(item => ({
		id: crypto.randomUUID(),
		name: item.name,
		color: item.color,
		memory: Math.round((item.percent / 100) * maxMemory)
	}));

	return {
		maxMemory,
		data
	};
}

export default function StorageWidget() {
	const { maxMemory, data } = fakeData();
	const memoryUsed = data.reduce((sum, cat) => sum + cat.memory, 0);
	const cats = [...data, { id: "0", name: "Free", memory: maxMemory - memoryUsed }];
	const memoryOnly = cats.map(cat => cat.memory);
	const memoryCompounded = [];

	for (let i = 0; i < memoryOnly.length; ++i) {
		memoryCompounded.push(memoryOnly.slice(0, i + 1).reduce((a, b) => a + b));
	}

	return (
		<div className="storage-widget">
			<IconSprites />
			<StorageWidgetHeader />
			<StorageWidgetTotal used={memoryUsed} max={maxMemory} />
			<StorageWidgetBarGraph>
				{cats.map((cat, i) => {
					const percent = cat.memory / maxMemory;
					const offset = memoryCompounded[i - 1] / maxMemory || 0;
					return (
						<StorageWidgetBar
							key={cat.id}
							color={cat.color}
							percent={percent}
							offset={offset}
							forEmpty={i === cats.length - 1}
							ariaLabel={`${Utils.formatBytes(cat.memory)} ${cat.name}`}
						/>
					);
				})}
			</StorageWidgetBarGraph>
			<StorageWidgetCategoryList>
				{cats.map(cat => (
					<StorageWidgetCategory key={cat.id} color={cat.color} name={cat.name} memory={cat.memory} />
				))}
			</StorageWidgetCategoryList>
		</div>
	);
}

function StorageWidgetBar({ color, percent = 0, offset = 0, forEmpty, ariaLabel }) {
	const animationRef = useRef(0);
	const [animated, setAnimated] = useState(false);
	const barColor = Utils.fillColor(color);
	const percentPx = percent * 100;
	const offsetPx = offset * 100;
	const containerStyle = { transform: `translateX(${animated ? 0 : -offsetPx}%)` };
	const barStyle = {
		opacity: animated || forEmpty ? 1 : 0,
		left: `${offsetPx}%`,
		width: `${percentPx}%`
	};

	if (forEmpty) {
		containerStyle.transform = `translateX(${animated ? `calc(2px + ${offsetPx}%)` : 0})`;
		barStyle.right = "0";
		barStyle.left = "auto";
		barStyle.width = "calc(100% + 2px)";
	}

	useEffect(() => {
		animationRef.current = setTimeout(() => setAnimated(true), 200);
		return () => clearTimeout(animationRef.current);
	}, []);

	return (
		<div className="bar-wrapper">
			<div className="bar-container" style={containerStyle}>
				<div className={`bar ${barColor}`} style={barStyle} aria-label={ariaLabel}></div>
			</div>
		</div>
	);
}

function StorageWidgetBarGraph({ children }) {
	return <div className="storage-bar-graph">{children}</div>;
}

function StorageWidgetCategory({ color, name, memory = 0 }) {
	const catColor = Utils.fillColor(color);
	return (
		<div className="storage-category">
			<div className={`color-box ${catColor}`} />
			<span>
				<strong>{name}</strong> {Utils.formatBytes(memory)}
			</span>
		</div>
	);
}

function StorageWidgetCategoryList({ children }) {
	return <div className="storage-category-list">{children}</div>;
}

function StorageWidgetHeader() {
	return (
		<div className="storage-header">
			<div className="storage-title">SKILL</div>
			<button className="upgrade-button" type="button">
				<Icon icon="upgrade" /> Upgrade
			</button>
		</div>
	);
}

function StorageWidgetTotal({ used, max }) {
	return (
		<div className="storage-total">
			{Utils.formatBytes(used)}<sup>of {Utils.formatBytes(max)}</sup>
		</div>
	);
}

function Icon({ icon }) {
	return (
		<svg className="icon" width="16px" height="16px" aria-hidden="true">
			<use href={`#${icon}`} />
		</svg>
	);
}

function IconSprites() {
	return (
		<svg width="0" height="0" style={{ display: "none" }}>
			<symbol id="upgrade" viewBox="0 0 16 16">
				<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
					<circle r="7" cx="8" cy="8" />
					<polyline points="5 8,8 5,11 8" />
					<polyline points="8 5,8 11" />
				</g>
			</symbol>
		</svg>
	);
}

const Utils = {
	formatBytes(bytes, decimals = 2) {
		const sizes = ["bytes", "KB", "MB", "GB", "TB"];
		if (bytes === 0) return "0 bytes";
		const k = 1024;
		const i = Math.floor(Math.log(bytes) / Math.log(k));
		return `${parseFloat((bytes / Math.pow(k, i)).toFixed(decimals))} ${sizes[i]}`;
	},
	random() {
		return crypto.getRandomValues(new Uint32Array(1))[0] / 2 ** 32;
	},
	randomFloat(min, max) {
		return min + ((max - min) * this.random());
	},
	fillColor(color) {
		const colorMap = {
			html: "html",
			css: "css",
			js: "js",
			react: "react",
			jquery: "jquery",
			gray: "bg-gray",
			default: "bg-default"
		};
		return color ? colorMap[color] : colorMap.default;
	}
};

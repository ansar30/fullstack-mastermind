/**
 * Virtualized List - Complete Solution
 */

import { useState, useMemo, useCallback, memo } from 'react';

const ListItem = memo(({ item, style }) => {
    return (
        <div style={style}>
            {item.name}
        </div>
    );
});

function VirtualizedList({ items, itemHeight = 50, containerHeight = 400 }) {
    const [scrollTop, setScrollTop] = useState(0);

    const visibleRange = useMemo(() => {
        const start = Math.floor(scrollTop / itemHeight);
        const end = Math.min(
            start + Math.ceil(containerHeight / itemHeight) + 1,
            items.length
        );
        return { start, end };
    }, [scrollTop, itemHeight, containerHeight, items.length]);

    const visibleItems = useMemo(() => {
        return items.slice(visibleRange.start, visibleRange.end);
    }, [items, visibleRange.start, visibleRange.end]);

    const totalHeight = items.length * itemHeight;
    const offsetY = visibleRange.start * itemHeight;

    const handleScroll = useCallback((e) => {
        setScrollTop(e.target.scrollTop);
    }, []);

    return (
        <div
            style={{
                height: containerHeight,
                overflow: 'auto',
                position: 'relative'
            }}
            onScroll={handleScroll}
        >
            <div style={{ height: totalHeight, position: 'relative' }}>
                <div style={{ transform: `translateY(${offsetY}px)` }}>
                    {visibleItems.map((item, index) => (
                        <ListItem
                            key={item.id}
                            item={item}
                            style={{
                                height: itemHeight,
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0
                            }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default VirtualizedList;


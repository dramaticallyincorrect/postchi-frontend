export function uniquesByKey<T>(list: T[], keyName: keyof T): T[] {
    // A Set to track the primitive key values encountered so far.
    // The type of the Set is determined by the type of the property T[keyof T].
    const seenKeys = new Set<T[keyof T]>();

    return list.filter(item => {
        const keyValue = item[keyName];

        // The Set naturally uses value-based equality for primitives (numbers, strings).
        if (seenKeys.has(keyValue)) {
            // Key is a duplicate, so filter it out.
            return false;
        } else {
            // Key is new, add it to the set and keep the item.
            seenKeys.add(keyValue);
            return true;
        }
    });
}
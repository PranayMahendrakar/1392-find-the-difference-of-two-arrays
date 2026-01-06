var findDifference = function(nums1, nums2) {
        const set1 = new Set(nums1);
            const set2 = new Set(nums2);
                return [
                        [...set1].filter(x => !set2.has(x)),
                                [...set2].filter(x => !set1.has(x))
                                    ];
                                    };
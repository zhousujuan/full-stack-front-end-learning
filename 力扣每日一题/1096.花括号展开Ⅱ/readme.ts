function braceExpansionII(exp: string): string[] {
    const reg0 = /\{([a-z,]+)\}/g;
    const reg1 = new RegExp(`(?<![a-z}])${reg0.source}(?![a-z{])`, 'g');
    const reg2 = new RegExp(`(${reg0.source}){2,}|[a-z]+(${reg0.source})+|(${reg0.source})+[a-z]+`, 'g');

    while (1) {
        const f1 = reg1.test(exp);
        if (f1) exp = exp.replace(reg1, '$1');

        const f2 = reg2.test(exp);
        if (f2) {
            exp = exp.replace(reg2, (m) => {
                const reg = new RegExp(`${reg0.source}|[a-z]+`, 'g');

                const tokenGroup = (m.match(reg) || []).map(s => s.split(/,|\{|\}/).filter(Boolean));

                let ans = tokenGroup[0];
                for (let i = 1; i < tokenGroup.length; i++) {
                    const newAns = [];
                    for (const h of ans) {
                        for (const t of tokenGroup[i]) {
                            newAns.push(h + t);
                        }
                    }
                    ans = newAns;
                }

                return `{${ans.join(',')}}`
            });
        }

        if (!f1 && !f2) break;
    }

    return [...new Set(exp.split(','))].sort();
};
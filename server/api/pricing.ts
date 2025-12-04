export interface PricingPlan {
    id: string,
    name: string,
    total: string,
    info: [string]
}

export default defineEventHandler( (event) => {
    return [
        {
            id: 'pri_01kb2cpzx27r6br7b636jxkvrt',
            name: 'Free',
            total: '0',
            info: ['Core Features', 'No Updates']
        },
        {
            id: 'pri_01kb3n17k8vzgy4vdafcxtanhx',
            name: 'Individual',
            total: '20$',
            info: ['1 year of updates', 'Non transferable licence', 'Scripts', 'Open Api Integration',]
        },
        {
            id: 'pri_01kb3n774k95ee7njf08n0exr9',
            name: 'Business',
            total: '60$',
            info: ['1 year of updates', 'Transferable licence', 'Scripts', 'Open Api Integration',]
        }
    ]
});
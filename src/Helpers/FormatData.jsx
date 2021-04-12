const formatData = function(rangeOfTemperatures){
        let data = [
            {
                'id': 'inside',
                'data': []
            },
            {
                'id': 'Outside',
                'data': []
            },
            {
                'id': 'Feels Like',
                'data': []
            }
        ];

        let inside = [];
        let outside = [];
        let feelsLike = [];

        for (let i of rangeOfTemperatures) {
            let formattedDatetime = new Date(i[3]);
            let blahTime = `${formattedDatetime.getFullYear()}-${(formattedDatetime.getMonth() + 1).toString().padStart(2, '0')}-${formattedDatetime.getDate().toString().padStart(2, '0')} ${(formattedDatetime.getHours().toString().padStart(2, '0'))}:${formattedDatetime.getMinutes().toString().padEnd(2, '0')}`;
            let insideRange = { x: blahTime, y: i[0] };
            let outsideRange = { x: blahTime, y: i[1] };
            let feelsLikeRange = { x: blahTime, y: i[2] };

            inside.push(insideRange);
            outside.push(outsideRange);
            feelsLike.push(feelsLikeRange);
        }

        data[0].data = inside
        data[1].data = outside
        data[2].data = feelsLike
        return data
    }

export default formatData;
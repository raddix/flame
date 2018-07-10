

var getCount = (firstName,secondName) =>    {
    var len1 = firstName.length;
    var len2 = secondName.length;

    var a = [];
    var b = [];

    var count = 0;
    for(i=0; i<len1; i++)
    {
        var temp = firstName.charAt(i).charCodeAt()-97;
        if(a[temp]==undefined)
            a[temp]=0;

        a[temp]=a[temp]+1;
    }

    for(i=0; i<len2; i++)
    {
        var temp = secondName.charAt(i).charCodeAt()-97;
        if(b[temp]==undefined)
            b[temp]=0;

        b[temp]=b[temp]+1;
    }

    for(i=0; i<26; i++)
    {
        if(a[i]!=undefined && b[i]!=undefined)
        {
            for(j=0; j<Math.min(a[i],b[i]); j++)
                count++;
        }
    }

    var toUseNum = (len1+len2)-(2*count);
    return toUseNum;
};

var getType = (numberToUse) => {
    var i=0;
    var mark =-1;

    var list = ['F','L','A','M','E','S'];

    while(i<5)
    {
        mark = mark+numberToUse;
        while(mark>list.length)
        {
            mark = mark-list.length;
        }
        if(mark==list.length || mark==0)
        {
            mark==0;
            list.shift();
        }
        else
        {
            list.splice((mark),1);
            mark--;
        }
        i++;
    }

    return list[0];
};

var getStatus = (code) => {
    var result = {};
    switch(code)
    {
        case 'F':
        result = {picSrc:'src=/img/friend.jpg',cardTitle:'YOU ARE FRIENDS',altMsg:'alt=Friends_from_FLAME',cardMsg:'A sweet friendship refreshes the soul.'};
        break;

        case 'L':
        result = {picSrc:'src=/img/lover.jpg',cardTitle:'YOU ARE LOVERS',altMsg:'Lovers_from_FLAME',cardMsg:'The heart wants what it wants.'};
        break;

        case 'A' :
        result = {picSrc:'src=/img/arrange.jpg',cardTitle:'YOU WILL BE ARRAGNED',altMsg:'Arranged_from_FLAME',cardMsg:'You stole my heart but I will let you keep it.'};
        break;

        case 'M' :
        result = {picSrc:'src=/img/married.jpg',cardTitle:'YOU WILL BE MARRIED',altMsg:'Married_from_FLAME',cardMsg:'A happily married man is one who understand every word that his wife didn\'t say.'};
        break;

        case 'E' :
        result = {picSrc:'src=/img/engage.jpg',cardTitle:'YOU WILL BE ENGAGED',altMsg:'Engaged_from_FLAME',cardMsg:'You are the first and last thing on my mind, every day.'};
        break;

        case 'S' :
        result = {picSrc:'src=/img/sisters.jpg',cardTitle:'YOU ARE SISTER-BROTHER',altMsg:'alt=Brother_Sister_from_FLAME',cardMsg:'There is no friend like a sister/brother.'};
        break;

        default:
        result = {picSrc:'src=/img/friend.jpg',cardTitle:'FRIENDS',altMsg:'Friends from FLAME',cardMsg:'Your friendship is beyond big mountains'};
        break;
    }

    return result;
};

module.exports = {
    getCount,
    getType,
    getStatus
};
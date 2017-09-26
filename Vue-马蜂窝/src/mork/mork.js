import Mock from 'mockjs'

Mock.mock(
    'http://mockjs', {
        "userName": '@name', //模拟名称
        "age|1-100": 100, //模拟年龄(1-100)
        "color": "@color", //模拟色值
        "date": "@date('yyyy-MM-dd')", //模拟时间
        "url": "@url()", //模拟url
        "content": "@cparagraph()" //模拟文本
    }
);
Mock.mock(
    'http://flower_time_pic', [
        'https://n4-q.mafengwo.net/s10/M00/88/41/wKgBZ1kDI7-AKR1AAAYwpjIgnOg61.jpeg?imageMogr2%2Fthumbnail%2F600x%2Fquality%2F100',
        'https://b3-q.mafengwo.net/s10/M00/26/FB/wKgBZ1jc996ABDaqAAVag5zlvdc31.jpeg?imageMogr2%2Fthumbnail%2F600x%2Fquality%2F100',
        'https://n4-q.mafengwo.net/s10/M00/7F/A1/wKgBZ1jbmBmAO4PcAAQAveYxKcQ12.jpeg?imageMogr2%2Fthumbnail%2F600x%2Fquality%2F100',
        'https://c4-q.mafengwo.net/s10/M00/DC/57/wKgBZ1jaNV2AQRDGAAYYTpP_lp464.jpeg?imageMogr2%2Fthumbnail%2F600x%2Fquality%2F100',
        'https://n2-q.mafengwo.net/s10/M00/14/38/wKgBZ1jYrsWAC1n8AATQ1hkarCU52.jpeg?imageMogr2%2Fthumbnail%2F600x%2Fquality%2F100',
        'https://c2-q.mafengwo.net/s10/M00/A6/2F/wKgBZ1jVBeCAL-alAAT1ntHuvHI47.jpeg?imageMogr2%2Fthumbnail%2F600x%2Fquality%2F100',
        'https://c4-q.mafengwo.net/s10/M00/A6/1C/wKgBZ1jVBaWAP2RvAATGL9aAlVU39.jpeg?imageMogr2%2Fthumbnail%2F600x%2Fquality%2F100',
        'https://c1-q.mafengwo.net/s10/M00/A5/E9/wKgBZ1jVBR-AXNT0AAW6JOOFMsU83.jpeg?imageMogr2%2Fthumbnail%2F600x%2Fquality%2F100',
        'https://n4-q.mafengwo.net/s10/M00/CD/AF/wKgBZ1jTWoGAAuIFAARJCPDRx2s45.jpeg?imageMogr2%2Fthumbnail%2F600x%2Fquality%2F100',
        'https://p2-q.mafengwo.net/s10/M00/AD/06/wKgBZ1jQ81CAA-jhAARbUqtsj3I01.jpeg?imageMogr2%2Fthumbnail%2F600x%2Fquality%2F100',
        'https://b2-q.mafengwo.net/s10/M00/15/E0/wKgBZ1jPuPaARwRmAAOs5Awqrqs83.jpeg?imageMogr2%2Fthumbnail%2F600x%2Fquality%2F100',
        'https://p4-q.mafengwo.net/s10/M00/4D/CC/wKgBZ1jLtECAOZGxAAROoHt8Pks91.jpeg?imageMogr2%2Fthumbnail%2F600x%2Fquality%2F100',
        'https://b3-q.mafengwo.net/s10/M00/4D/A9/wKgBZ1jLs_OABpAKAAS79ohddKs89.jpeg?imageMogr2%2Fthumbnail%2F600x%2Fquality%2F100',
        'https://p4-q.mafengwo.net/s10/M00/4D/8A/wKgBZ1jLs7eAQA6zAATmF_32ZLY36.jpeg?imageMogr2%2Fthumbnail%2F600x%2Fquality%2F100',
        'https://b1-q.mafengwo.net/s10/M00/5A/D9/wKgBZ1jJ-UOAeXwcAAKp75WrS3c82.jpeg?imageMogr2%2Fthumbnail%2F600x%2Fquality%2F100',
        'https://c4-q.mafengwo.net/s10/M00/61/C8/wKgBZ1jKAWOAH2YBAAT0L_oh8HE73.jpeg?imageMogr2%2Fthumbnail%2F600x%2Fquality%2F100',
        'https://c1-q.mafengwo.net/s10/M00/24/81/wKgBZ1jH1hiAPDZHAAeDPVCY0xA10.jpeg?imageMogr2%2Fthumbnail%2F600x%2Fquality%2F100',
        'https://p2-q.mafengwo.net/s10/M00/5D/22/wKgBZ1jGeJmAQNODAAR7zUkXo9Q46.jpeg?imageMogr2%2Fthumbnail%2F600x%2Fquality%2F100',
        'https://n4-q.mafengwo.net/s10/M00/96/01/wKgBZ1jCaUCANckHAAj7xdTpqh447.jpeg?imageMogr2%2Fthumbnail%2F600x%2Fquality%2F100',
        'https://p4-q.mafengwo.net/s10/M00/7B/BE/wKgBZ1i_4reAZ52BAAYpX4wdgHs17.jpeg?imageMogr2%2Fthumbnail%2F600x%2Fquality%2F100',
        'https://p3-q.mafengwo.net/s10/M00/A7/D0/wKgBZ1jCiliALPKnAAP1yl0oJjw58.jpeg?imageMogr2%2Fthumbnail%2F600x%2Fquality%2F100',
        'https://p2-q.mafengwo.net/s10/M00/3A/48/wKgBZ1i9HBKAQr_QAAQ3xTnakl409.jpeg?imageMogr2%2Fthumbnail%2F600x%2Fquality%2F100',
        'https://p3-q.mafengwo.net/s10/M00/A1/B5/wKgBZ1i5UYGAA-gpAAXWJbyWnjw96.jpeg?imageMogr2%2Fthumbnail%2F600x%2Fquality%2F100',
        'https://p4-q.mafengwo.net/s10/M00/A1/A3/wKgBZ1i5UU2AIoS7AAW5ve4KyaA71.jpeg?imageMogr2%2Fthumbnail%2F600x%2Fquality%2F100',
        'https://n1-q.mafengwo.net/s10/M00/D7/2F/wKgBZ1i1PfaAWIFbAAfdtxCD9JI71.jpeg?imageMogr2%2Fthumbnail%2F600x%2Fquality%2F100',
        'https://n2-q.mafengwo.net/s10/M00/48/28/wKgBZ1iz-muAW4AnAAVY6FIqKlU35.jpeg?imageMogr2%2Fthumbnail%2F600x%2Fquality%2F100',
        'https://p3-q.mafengwo.net/s10/M00/90/D1/wKgBZ1iv1QyAJ3MBAAQb6I-oCbI19.jpeg?imageMogr2%2Fthumbnail%2F600x%2Fquality%2F100',
        'https://n2-q.mafengwo.net/s10/M00/90/9B/wKgBZ1iv1MSAaueJAAWZ8yiHTs865.jpeg?imageMogr2%2Fthumbnail%2F600x%2Fquality%2F100',
        'https://b3-q.mafengwo.net/s10/M00/90/69/wKgBZ1iv1IKAEHQOAAQ0DgmunJ499.jpeg?imageMogr2%2Fthumbnail%2F600x%2Fquality%2F100',
        'https://b3-q.mafengwo.net/s10/M00/ED/28/wKgBZ1iuc8WAZKGnAATTAztAh3g36.jpeg?imageMogr2%2Fthumbnail%2F600x%2Fquality%2F100',
        'https://p3-q.mafengwo.net/s10/M00/7B/9D/wKgBZ1itXDeAZ1MPAAY9Cd0mf0491.jpeg?imageMogr2%2Fthumbnail%2F600x%2Fquality%2F100'
    ]
);
export default Mock
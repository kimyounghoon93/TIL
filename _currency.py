currency = requests.get('https://api.bithumb.com/public/ticker/all').json()['data']
    print(currency)
for i in currency:
    if not currency[i] or i == 'date' :
        continue
    op = float(currency[i]['opening_price'])
    cl = float(currency[i]['closing_price'])
    mi = float(currency[i]['min_price'])
    ma = float(currency[i]['max_price'])
if op+(ma-mi) > ma:
    print(f"{i} 상승장")
else:
    print(f"{i} 하락장")

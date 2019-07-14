import React from 'react';
import {Paper, TableBody, Table, TableCell, TableHead, TableRow} from '@material-ui/core';

const History =()=>{

    const [orderHis, setOrderHis] = React.useState([
        {
            id: 1,
            orderNO: 39324,
            orderDate: 'Jun 12, 2019',
            shipvia: 'Fedex',
            orderItem: [
                {
                    id: 1, 
                    NDC: '65862-073-60', 
                    productName: 'Abacavir', 
                    price: 71.74, 
                    manufacturer: 'Aurobindo', 
                    str: '300mg', 
                    dosage: 'Tablet', 
                    count: 60, 
                    pkgD: '60 Tablet, Film Coated In 1 Bottle',
                    qty: 5
                },
                {
                    id: 2, 
                    NDC: '65862-073-60', 
                    productName: 'Abacavir', 
                    price: 71.74, 
                    manufacturer: 'Aurobindo', 
                    str: '300mg', 
                    dosage: 'Tablet', 
                    count: 60, 
                    pkgD: '60 Tablet, Film Coated In 1 Bottle',
                    qty: 3
                }
            ]
        },
        {
            id: 2,
            orderNO: 39324,
            orderDate: 'Jun 12, 2019',
            shipvia: 'Fedex',
            orderItem: [
                {
                    id: 1, 
                    NDC: '65862-073-60', 
                    productName: 'Abacavir', 
                    price: 71.74, 
                    manufacturer: 'Aurobindo', 
                    str: '300mg', 
                    dosage: 'Tablet', 
                    count: 60, 
                    pkgD: '60 Tablet, Film Coated In 1 Bottle',
                    qty: 1
                },
                {
                    id: 2, 
                    NDC: '65862-073-60', 
                    productName: 'Abacavir', 
                    price: 71.74, 
                    manufacturer: 'Aurobindo', 
                    str: '300mg', 
                    dosage: 'Tablet', 
                    count: 60, 
                    pkgD: '60 Tablet, Film Coated In 1 Bottle',
                    qty: 2
                },
                {
                    id: 3, 
                    NDC: '65862-073-60', 
                    productName: 'Abacavir', 
                    price: 71.74, 
                    manufacturer: 'Aurobindo', 
                    str: '300mg', 
                    dosage: 'Tablet', 
                    count: 60, 
                    pkgD: '60 Tablet, Film Coated In 1 Bottle',
                    qty: 4
                }
            ]
        },
        {
            id: 3,
            orderNO: 39324,
            orderDate: 'Jun 12, 2019',
            shipvia: 'Fedex',
            orderItem: [
                {
                    id: 1, 
                    NDC: '65862-073-60', 
                    productName: 'Abacavir', 
                    price: 71.74, 
                    manufacturer: 'Aurobindo', 
                    str: '300mg', 
                    dosage: 'Tablet', 
                    count: 60, 
                    pkgD: '60 Tablet, Film Coated In 1 Bottle',
                    qty: 3
                }
            ]
        }
    ])

    const LoadOrderitems =(items)=>{
        let item = items.item;
        let obj = [];
       if(item.length >= 1){
           for(let i = 0; i < item.length; i++){
               if(i == 0){
                   continue;
               }
               obj.push(
                   <TableRow>
                       <TableCell padding="none" style={{textAlign: 'center', border: '1px solid rgba(224, 224, 224, 1)'}}>{item[i]['NDC']}</TableCell>
                       <TableCell padding="none" style={{textAlign: 'center', border: '1px solid rgba(224, 224, 224, 1)'}}>{item[i]['price']}</TableCell>
                       <TableCell padding="none" style={{textAlign: 'center', border: '1px solid rgba(224, 224, 224, 1)'}}>{item[i]['manufacturer']}</TableCell>
                       <TableCell padding="none" style={{textAlign: 'center', border: '1px solid rgba(224, 224, 224, 1)'}}>{item[i]['qty']}</TableCell>
                   </TableRow>
               )
           }
       }

       return obj;

    }

    const loadOrderInfo =(items)=>{
        let obj= []
        if(items.length >= 1){
            for(let x = 0; x < items.length; x++){
                let itemCount = items[x]['orderItem'].length;
                let totalQty = 0;
                let totalAmount = 0;
                for(let i = 0; i < itemCount; i++){
                   totalQty += items[x]['orderItem'][i]['qty'];
                   totalAmount += items[x]['orderItem'][i]['price'];
                }
                obj.push(
                    <React.Fragment>
                        <TableRow>
                            <TableCell 
                                rowSpan={itemCount} 
                                padding="none" 
                                style={{textAlign: 'center', border: '1px solid rgba(224, 224, 224, 1)'}}
                            >
                                {items[x]['orderNO']}
                            </TableCell>
                            <TableCell 
                                rowSpan={itemCount} 
                                padding="none" 
                                style={{textAlign: 'center', border: '1px solid rgba(224, 224, 224, 1)'}}
                            >
                                {items[x]['orderDate']}
                            </TableCell>
                            <TableCell 
                                padding="none" 
                                style={{textAlign: 'center', border: '1px solid rgba(224, 224, 224, 1)'}}
                            >
                                {items[x]['orderItem'][0]['NDC']}
                            </TableCell>
                            <TableCell 
                                padding="none" 
                                style={{textAlign: 'center', border: '1px solid rgba(224, 224, 224, 1)'}}
                            >
                                {items[x]['orderItem'][0]['price']}
                            </TableCell>
                            <TableCell 
                                padding="none" 
                                style={{textAlign: 'center', border: '1px solid rgba(224, 224, 224, 1)'}}
                            >
                                {items[x]['orderItem'][0]['manufacturer']}
                            </TableCell>
                            <TableCell 
                                padding="none" 
                                style={{textAlign: 'center', border: '1px solid rgba(224, 224, 224, 1)'}}
                            >
                                {items[x]['orderItem'][0]['qty']}
                            </TableCell>
                            <TableCell 
                                rowSpan={itemCount} 
                                padding="none" 
                                style={{textAlign: 'center', border: '1px solid rgba(224, 224, 224, 1)'}}
                            >
                                {totalQty}
                            </TableCell>
                            <TableCell 
                                rowSpan={itemCount} 
                                padding="none" 
                                style={{textAlign: 'center', border: '1px solid rgba(224, 224, 224, 1)'}}
                            >
                                {totalAmount}
                            </TableCell>
                            <TableCell 
                                rowSpan={itemCount} 
                                padding="none" 
                                style={{textAlign: 'center', border: '1px solid rgba(224, 224, 224, 1)'}}
                            >
                                {items[x]['shipvia']}
                            </TableCell>
                            <TableCell 
                                rowSpan={itemCount} 
                                padding="none" 
                                style={{textAlign: 'center', border: '1px solid rgba(224, 224, 224, 1)'}}
                            >
                                Re-Order
                            </TableCell>
                        </TableRow>
                        <LoadOrderitems item={items[x]['orderItem']}/>
                    </React.Fragment>
                )
            }
        }
        return obj;
    }

    return(
        <Paper>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell padding="none" style={{textAlign: 'center', border: '1px solid rgba(224, 224, 224, 1)'}}>Order#</TableCell>
                        <TableCell padding="none" style={{textAlign: 'center', border: '1px solid rgba(224, 224, 224, 1)'}}>OrderDate</TableCell>
                        <TableCell padding="none" style={{textAlign: 'center', border: '1px solid rgba(224, 224, 224, 1)'}}>NDC/Name</TableCell>
                        <TableCell padding="none" style={{textAlign: 'center', border: '1px solid rgba(224, 224, 224, 1)'}}>Price</TableCell>
                        <TableCell padding="none" style={{textAlign: 'center', border: '1px solid rgba(224, 224, 224, 1)'}}>Description</TableCell>
                        <TableCell padding="none" style={{textAlign: 'center', border: '1px solid rgba(224, 224, 224, 1)'}}>Item Quantity</TableCell>
                        <TableCell padding="none" style={{textAlign: 'center', border: '1px solid rgba(224, 224, 224, 1)'}}>Total Quantity</TableCell>
                        <TableCell padding="none" style={{textAlign: 'center', border: '1px solid rgba(224, 224, 224, 1)'}}>Total Amount</TableCell>
                        <TableCell padding="none" style={{textAlign: 'center', border: '1px solid rgba(224, 224, 224, 1)'}}>ShipVia</TableCell>
                        <TableCell padding="none" style={{textAlign: 'center', border: '1px solid rgba(224, 224, 224, 1)'}}>Re-Order</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {loadOrderInfo(orderHis)}
                </TableBody>
            </Table>
        </Paper>
    )
}

export default History;
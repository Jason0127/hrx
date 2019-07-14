import React from 'react';
import {Paper, TableCell, Table, TableRow, TableHead, TableBody} from '@material-ui/core'

const Invoice =()=>{

    const [InvoiceHis, setInvoice] = React.useState([
        
    ]);

    const loadDataInformation = (items)=>{
        let x;
        return(
            items.length >= 1 ?
                items.map((item)=>{
                    x += 1
                    return(
                        <TableRow key={x}>
                            <TableCell padding="none" style={{textAlign: 'center', border: '1px solid rgba(224, 224, 224, 1)'}}>PaperWork</TableCell>
                            <TableCell padding="none" style={{textAlign: 'center', border: '1px solid rgba(224, 224, 224, 1)'}}>Invoice#</TableCell>
                            <TableCell padding="none" style={{textAlign: 'center', border: '1px solid rgba(224, 224, 224, 1)'}}>Invoice Date</TableCell>
                            <TableCell padding="none" style={{textAlign: 'center', border: '1px solid rgba(224, 224, 224, 1)'}}>Order#</TableCell>
                            <TableCell padding="none" style={{textAlign: 'center', border: '1px solid rgba(224, 224, 224, 1)'}}>Order Date</TableCell>
                            <TableCell padding="none" style={{textAlign: 'center', border: '1px solid rgba(224, 224, 224, 1)'}}>SubTotal</TableCell>
                            <TableCell padding="none" style={{textAlign: 'center', border: '1px solid rgba(224, 224, 224, 1)'}}>Shipping Fee</TableCell>
                            <TableCell padding="none" style={{textAlign: 'center', border: '1px solid rgba(224, 224, 224, 1)'}}>Credit Memo</TableCell>
                            <TableCell padding="none" style={{textAlign: 'center', border: '1px solid rgba(224, 224, 224, 1)'}}>Invoice Total</TableCell>
                            <TableCell padding="none" style={{textAlign: 'center', border: '1px solid rgba(224, 224, 224, 1)'}}>Amount Due</TableCell>
                            <TableCell padding="none" style={{textAlign: 'center', border: '1px solid rgba(224, 224, 224, 1)'}}>Status</TableCell>
                            <TableCell padding="none" style={{textAlign: 'center', border: '1px solid rgba(224, 224, 224, 1)'}}>Due Date</TableCell>
                        </TableRow>
                    )
                })
            :
            <TableRow>
                <TableCell colSpan={12} padding="none" style={{textAlign: 'center', border: '1px solid rgba(224, 224, 224, 1)'}}>No data</TableCell>
            </TableRow>
        )
    }
    
    return(
        <Paper>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell padding="none" style={{textAlign: 'center', border: '1px solid rgba(224, 224, 224, 1)'}}>PaperWork</TableCell>
                        <TableCell padding="none" style={{textAlign: 'center', border: '1px solid rgba(224, 224, 224, 1)'}}>Invoice#</TableCell>
                        <TableCell padding="none" style={{textAlign: 'center', border: '1px solid rgba(224, 224, 224, 1)'}}>Invoice Date</TableCell>
                        <TableCell padding="none" style={{textAlign: 'center', border: '1px solid rgba(224, 224, 224, 1)'}}>Order#</TableCell>
                        <TableCell padding="none" style={{textAlign: 'center', border: '1px solid rgba(224, 224, 224, 1)'}}>Order Date</TableCell>
                        <TableCell padding="none" style={{textAlign: 'center', border: '1px solid rgba(224, 224, 224, 1)'}}>SubTotal</TableCell>
                        <TableCell padding="none" style={{textAlign: 'center', border: '1px solid rgba(224, 224, 224, 1)'}}>Shipping Fee</TableCell>
                        <TableCell padding="none" style={{textAlign: 'center', border: '1px solid rgba(224, 224, 224, 1)'}}>Credit Memo</TableCell>
                        <TableCell padding="none" style={{textAlign: 'center', border: '1px solid rgba(224, 224, 224, 1)'}}>Invoice Total</TableCell>
                        <TableCell padding="none" style={{textAlign: 'center', border: '1px solid rgba(224, 224, 224, 1)'}}>Amount Due</TableCell>
                        <TableCell padding="none" style={{textAlign: 'center', border: '1px solid rgba(224, 224, 224, 1)'}}>Status</TableCell>
                        <TableCell padding="none" style={{textAlign: 'center', border: '1px solid rgba(224, 224, 224, 1)'}}>Due Date</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {loadDataInformation(InvoiceHis)}
                </TableBody>
            </Table>
        </Paper>
    )
}

export default Invoice;
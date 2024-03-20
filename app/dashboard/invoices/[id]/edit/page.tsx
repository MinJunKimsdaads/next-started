import Form from '@/app/ui/invoices/edit-form';
import Breadcrumbs from "@/app/ui/invoices/breadcrumbs";
import { fetchInvoiceById, fetchCustomers } from "@/app/lib/data";

export default async function Page({ params }: { params: { id: string } }){
    const id = params.id;
    const [invoice,customers] = await Promise.all([
        fetchInvoiceById(id),
        fetchCustomers(),
    ])

    return(
        <main>
            <Breadcrumbs breadcrumbs={[
                {label: 'Invoices',href:'/dashboard/invoices'},
                {
                    label: 'Create Invoice',
                    href: '/dashboard/invoices',
                    active:true,
                },
            ]}/>
            <Form invoice={invoice} customers={customers}></Form>
        </main>
    )
}
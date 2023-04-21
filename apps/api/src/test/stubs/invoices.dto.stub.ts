import {
  InvoiceStatus,
  PaymentTermsOptions,
} from '../../api/v1/invoices/interfaces/invoices.interface';
import {
  CreateInvoiceDto,
  UpdateInvoiceDto,
} from '../../api/v1/invoices/dto/invoices.dto';

export const CreateInvoiceDtoStub = (): CreateInvoiceDto => ({
  status: InvoiceStatus.PENDING,
  description: 'Invoice test',
  billFrom: {
    street: 'Veracruz 1837',
    city: 'Colima',
    postCode: '28100',
    country: 'Mexico',
  },
  billTo: {
    clientName: 'Ronaldo',
    clientEmail: 'client@email.com',
    street: 'Morelos',
    city: 'Tecoman',
    postCode: '28100',
    country: 'Mexico',
  },
  itemList: [
    {
      name: 'Toy',
      quantity: 2,
      price: 100,
    },
  ],
  paymentTerms: PaymentTermsOptions.NET_30_DAYS,
});

export const UpdateInvoiceDtoStub = (): UpdateInvoiceDto => ({
  status: InvoiceStatus.PAID,
});
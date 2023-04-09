import {
  Controller,
  Body,
  Param,
  Post,
  Get,
  Patch,
  Delete,
  UseInterceptors,
  CacheInterceptor,
  UploadedFile,
} from '@nestjs/common';

import { UsersServiceV1 } from './users/users.service';
import { UserDto, UpdateUserDto } from './users/dto/users.dto';

import { InvoicesServiceV1 } from './invoices/invoices.service';
import {
  InvoiceDto,
  CreateInvoiceDto,
  UpdateInvoiceDto,
} from './invoices/dto/invoices.dto';

import {
  ApiTags,
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiNotFoundResponse,
  ApiBadRequestResponse,
} from '@nestjs/swagger';
import { ApiOkResponse } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller({ version: '1' })
@UseInterceptors(CacheInterceptor)
export class V1Controller {
  constructor(
    private readonly usersService: UsersServiceV1,
    private readonly invoicesService: InvoicesServiceV1
  ) {}

  ////////////// api/v1/users/
  @Get('users')
  @ApiTags('Users')
  @ApiOperation({ summary: 'Gets the requested user' })
  @ApiOkResponse({ description: 'Successfully obtained user', type: UserDto })
  @ApiNotFoundResponse({ description: 'User not found' })
  getUser() {
    return 'wip';
  }

  ////////////// api/v1/users/
  @Patch('users/:userId')
  @ApiTags('Users')
  @ApiOperation({ summary: 'Update the username or avatar of the user' })
  @ApiOkResponse({ description: 'Successfully updated user', type: UserDto })
  @ApiBadRequestResponse({
    description: 'At least one property must be provided',
  })
  @UseInterceptors(FileInterceptor('picture'))
  updateUser(
    @Param('userId') userId: string,
    @Body() body: UpdateUserDto,
    @UploadedFile() avatar: Express.Multer.File
  ) {
    return this.usersService.updateUser(userId, body, avatar);
  }

  ////////////////////////////////////////
  ////////////////////////////////////////
  ////////////////////////////////////////

  // ////////////// api/v1/invoices
  // @Post('invoices')
  // @ApiBody({ type: CreateInvoiceDto })
  // @ApiTags('Invoices')
  // @ApiOperation({ summary: 'Creates an invoice for the current user' })
  // @ApiOkResponse({
  //   description: 'Successfully created invoice',
  //   type: InvoiceDto,
  // })
  // createUserInvoice(
  //   @CurrentUser() { email }: UserDto,
  //   @Body() invoiceData: CreateInvoiceDto
  // ): Promise<InvoiceDto> {
  //   return this.invoicesService.createUserInvoice(email, invoiceData);
  // }

  // ////////////// api/v1/invoices
  // @Get('invoices')
  // @ApiTags('Invoices')
  // @ApiOperation({ summary: 'Gets all the invoices of the current User' })
  // @ApiOkResponse({
  //   description: 'Successfully obtained invoices',
  //   type: [CreateInvoiceDto],
  // })
  // getAllUserInvoices(@CurrentUser() { email }: UserDto): Promise<InvoiceDto[]> {
  //   return this.invoicesService.getAllUserInvoices(email);
  // }

  // ////////////// api/v1/invoices/:invoiceId
  // @Get('invoices/:invoiceId')
  // @ApiTags('Invoices')
  // @ApiParam({
  //   name: 'invoiceId',
  //   type: 'string',
  //   required: true,
  // })
  // @ApiOperation({ summary: 'Obtain a specific invoice from the current user' })
  // @ApiOkResponse({
  //   description: 'Successfully obtained invoice',
  //   type: CreateInvoiceDto,
  // })
  // getUserInvoice(
  //   @CurrentUser() { email }: UserDto,
  //   @Param('invoiceId') invoiceId: string
  // ): Promise<InvoiceDto> {
  //   return this.invoicesService.getUserInvoice(email, invoiceId);
  // }

  // ////////////// api/v1/invoices/:invoiceId
  // @Patch('invoices/:invoiceId')
  // @ApiTags('Invoices')
  // @ApiParam({
  //   name: 'invoiceId',
  //   type: 'string',
  //   required: true,
  // })
  // @ApiOperation({ summary: 'Edit an invoice data' })
  // @ApiOkResponse({
  //   description: 'Successfully updated invoice',
  //   type: CreateInvoiceDto,
  // })
  // updateInvoice(
  //   @CurrentUser() { email }: UserDto,
  //   @Param('invoiceId') invoiceId: string,
  //   @Body() invoiceData: UpdateInvoiceDto
  // ): Promise<InvoiceDto> {
  //   return this.invoicesService.updateInvoice(email, invoiceId, invoiceData);
  // }

  // ////////////// api/v1/invoices/:invoiceId
  // @Delete('invoices/:invoiceId')
  // @ApiTags('Invoices')
  // @ApiParam({
  //   name: 'invoiceId',
  //   type: 'string',
  //   required: true,
  // })
  // @ApiOperation({ summary: 'Delete an invoice' })
  // @ApiOkResponse({
  //   description: 'Successfully deleted invoice',
  //   type: CreateInvoiceDto,
  // })
  // deleteInvoice(
  //   @CurrentUser() { email }: UserDto,
  //   @Param('invoiceId') invoiceId: string
  // ): Promise<InvoiceDto> {
  //   return this.invoicesService.deleteInvoice(email, invoiceId);
  // }
}

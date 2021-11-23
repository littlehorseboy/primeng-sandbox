import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';

@Component({
  selector: 'app-tree-expand-all',
  templateUrl: './tree-expand-all.component.html',
  styleUrls: ['./tree-expand-all.component.scss']
})
export class TreeExpandAllComponent implements OnInit {

  public files: TreeNode[] = [
    {
      label: 'Documents',
      data: 'Documents Folder',
      expandedIcon: 'pi pi-folder-open',
      collapsedIcon: 'pi pi-folder',
      children: [
        {
          label: 'Work',
          data: 'Work Folder',
          expandedIcon: 'pi pi-folder-open',
          collapsedIcon: 'pi pi-folder',
          children: [
            { label: 'Expenses.doc', icon: 'pi pi-file', data: 'Expenses Document' }, { label: 'Resume.doc', icon: 'pi pi-file', data: 'Resume Document' }
          ]
        },
        {
          label: 'Home',
          data: 'Home Folder',
          expandedIcon: 'pi pi-folder-open',
          collapsedIcon: 'pi pi-folder',
          children: [
            { label: 'Invoices.txt', icon: 'pi pi-file', data: 'Invoices for this month' }
          ]
        }
      ]
    },
    {
      label: 'Pictures',
      data: 'Pictures Folder',
      expandedIcon: 'pi pi-folder-open',
      collapsedIcon: 'pi pi-folder',
      children: [
        { label: 'barcelona.jpg', icon: 'pi pi-image', data: 'Barcelona Photo' },
        { label: 'logo.jpg', icon: 'pi pi-file', data: 'PrimeFaces Logo' },
        { label: 'primeui.png', icon: 'pi pi-image', data: 'PrimeUI Logo' }
      ]
    },
    {
      label: 'Movies',
      data: 'Movies Folder',
      expandedIcon: 'pi pi-folder-open',
      collapsedIcon: 'pi pi-folder',
      children: [
        {
          label: 'Al Pacino',
          data: 'Pacino Movies',
          children: [
            { label: 'Scarface', icon: 'pi pi-video', data: 'Scarface Movie' }, { label: 'Serpico', icon: 'pi pi-file-video', data: 'Serpico Movie' }
          ]
        },
        {
          label: 'Robert De Niro',
          data: 'De Niro Movies',
          children: [
            { label: 'Goodfellas', icon: 'pi pi-video', data: 'Goodfellas Movie' }, { label: 'Untouchables', icon: 'pi pi-video', data: 'Untouchables Movie' }
          ]
        }
      ]
    }
  ];

  public selectedFiles: TreeNode[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  public nodeSelect(event: { event: MouseEvent, node: TreeNode }): void {
    console.log(event);
    this.selectedFiles;
  }

  public nodeUnSelect(event: { event: MouseEvent, node: TreeNode }): void {
    console.log(event);
    this.selectedFiles;
  }

  public expandAll(): void {
    this.files.forEach(node => {
      this.expandRecursive(node, true);
    });
  }

  public collapseAll(): void {
    this.files.forEach(node => {
      this.expandRecursive(node, false);
    });
  }

  private expandRecursive(node: TreeNode, isExpand: boolean): void {
    node.expanded = isExpand;
    if (node.children) {
      node.children.forEach(childNode => {
        this.expandRecursive(childNode, isExpand);
      });
    }
  }

}
